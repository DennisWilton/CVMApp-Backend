import Express, { Router } from 'express';
import cors from 'cors';
import payboleto from './payboleto';
import {baseUrl} from '.';
import axios from 'axios';
import xml2js from 'xml-js';
import paycartao from './paycartao';
import verifyToken from '../auth/verifyToken';
import statusTransacao from './statusTransacao';
import parseXml from '../util/parseXml';
import User from '../models/user/User';

const app = Router();

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req, res) => {
    res.json({status: "OK"})
})

app.get('/getSessionID', async (req, res) => {
    try{
        const {data} = (await axios.post(`${baseUrl}/v2/sessions?email=${process.env.PAGSEGURO_EMAIL}&token=${process.env.PAGSEGURO_TOKEN}`))
        const {session} = ( xml2js.xml2js(data, {compact: true, ignoreDeclaration: true }))
        const sessionID = session.id._text;
        res.json({status: 1, sessionID});
    }catch(e){
        const response = {status: false, message: e};
        console.log(response)
        res.json(response)
    }
  })

app.post('/boleto', async (req, res) => {
    try{
        if(!req.headers.authorization) throw new Error("Não autorizado. Token de usuário inválido e/ou não existente.");

        const token = req.headers.authorization.split(" ")[1];

        console.log(token);
        
        const user = await verifyToken(token);

        const {transactionCode, paymentLink} = (await payboleto(req.body));

        user.payment.actualCode = transactionCode;
        await user.save();

        res.json( paymentLink );
    }catch(e){
        console.log(e);
        const response = {status: false, data: {...e.response, request: undefined}};
        console.log(response)
        res.json(response)
    }
})

app.post('/cartao', async (req, res) => {
    try{
        console.log(await paycartao(req.body));

        res.json("OK");
    }catch(e){
        let response = {}; 
        response.status = false;

        switch(true){
            case e.response:
                response = {...response, data: {...e.response, request: undefined}};
                break;
            
            case e.message:
            default:
                response = {...response, data: e};
                break;
        }
        
        console.log(response)
        res.status(300).json(response);
    }
})

app.get('/status/:transactionCode', async (req, res) => {
    try{
        const { transactionCode } = req.params;

        if(!req.headers.authorization) throw new Error("Token inválido/inexistente.");

        const watcher = verifyToken(req.headers.authorization.split(" ")[1]);

        const {status, user} = await statusTransacao(transactionCode);
        

        const data = { status: status.transaction.status._text, paymentLink: status.transaction.paymentLink._text }

        const _user = {...user}
        delete _user.password;

        res.json({status: true, data});
        
    }catch(e){
        let response = {status: false};
        if(e.message){
            response.data = {msg: e.message}
        }
        res.json(response);
    }
})


app.post('/receiveNotification', async (req, res) => {
    if(!req.body.notificationCode){ res.json({success: false}); return}

    const rawData = (await axios.get(`${baseUrl}/v3/transactions/notifications/${req.body.notificationCode}`, {params: { email: process.env.PAGSEGURO_EMAIL, token: process.env.PAGSEGURO_TOKEN }})).data
    
    const { transaction } = parseXml(rawData);

    const user = await User.findOne({'payment.actualCode': transaction.code})

    // console.log(user);

    if(!user) return;
    
    user.setPaymentStatus(transaction);    
    
    res.json({success: true})
})

export default app;