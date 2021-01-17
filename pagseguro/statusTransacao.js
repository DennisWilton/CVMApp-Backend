import { baseUrl } from '.'
import axios from 'axios';
import User from '../models/user/User';
import xml2js from 'xml-js';

export default async function(transactionCode, force = false){
    const user = await User.findOne({transactionCode});
    if(!user) throw new Error("Usuário não encontrado para esta transação!");

    //30 segundos
    if(user.lastTransactionStatus && ((Date.now() - +user.lastTransactionStatus) / 1000 / 60 <= 10) && !force && !user.isPago) return { status: JSON.parse(user.transactionStatus), user};

    const xmlStatus = await axios.get(`${baseUrl}/v2/transactions/${transactionCode}`, {params: { email: process.env.PAGSEGURO_EMAIL, token: process.env.PAGSEGURO_TOKEN }})
    
    const status = (xml2js.xml2js(await xmlStatus.data, {compact: true, ignoreDeclaration: true}));

    user.transactionStatus = JSON.stringify(status);
    user.lastTransactionStatus = Date.now();
    if(status?.transaction?.status?._text === '3') user.isPago = true;
    await user.save();

    return {status, user}
}