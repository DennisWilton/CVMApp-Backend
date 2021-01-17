import {baseUrl, isDevelopment} from '.';
import axios from 'axios';
import xml2js from 'xml-js';
import parseXml from '../util/parseXml';

export default async function({...data}){
    try{
        console.log("Solicitação de boleto atendida:");
        console.log(`Validando dados...`)
        validaDados(data);
        
        console.log(`Validação bem sucedida.`)
        console.log(`Gerando boleto...`);

        const xml = `<payment>
                <mode>default</mode>
                <method>boleto</method>
                <sender>
                    <name>${data.name}</name>
                    <email>${isDevelopment ? 'usuariodetestes@sandbox.pagseguro.com.br' : data.email}</email>
                    <phone>
                        <areaCode>${data.phone.areaCode}</areaCode>
                        <number>${data.phone.number}</number>
                    </phone>
                    <documents>
                        <document>
                            <type>CPF</type>
                            <value>${data.cpf}</value>
                        </document>
                    </documents>
                    <hash>${data.hash}</hash>
                </sender>
                <currency>BRL</currency>
                ${(process.env.WEBSITE_URL) && `<notificationURL>${process.env.WEBSITE_URL}/buying/receiveNotification</notificationURL>`}
                <items>
                    <item>
                        <id>inscricao1lote</id>
                        <description>Pariticipação do acampamento CVM 2021</description>
                        <quantity>1</quantity>
                        <amount>230.00</amount>
                    </item>
                </items>
            <extraAmount>0.00</extraAmount>
                <reference>R859203</reference>
            <shipping>
                <addressRequired>false</addressRequired>
            </shipping>
        </payment>`;

        const config = {
            params: { email: process.env.PAGSEGURO_EMAIL, token: process.env.PAGSEGURO_TOKEN },
            headers: {
                'Content-Type': 'application/xml'
            }        
        }

        const call = axios.post(`${baseUrl}/v2/transactions/`, xml, config);
        const resultado = parseXml(await (await call).data);
        
        return  {resultado: await resultado, transactionCode: await resultado.transaction.code, paymentLink: await resultado.transaction.paymentLink};
    }catch(e){
        throw e;
    }
}

function validaDados(data){
    let required;
    
    required = ['hash', 'name', 'email', 'phone', 'cpf', 'items'];
    required.forEach( req => {
        if(!data[req]) throw new Error(`Parâmetros incorretos. Está faltando data.${req}.`)
        console.log(`${req} > ${data[req]}`)
    })

    required = ['areaCode', 'number'];
    required.forEach( req => {
        if(!data['phone'][req] ) throw new Error("Parâmetros incorretos. [data.phone] precisa receber areaCode e number.")
    })

    if(!Array.isArray(data['items'])) throw new Error(`Parâmetros incorretos. [data.items] precisa ser um array/lista de itens.`)
    
    required = ['id', 'description', 'amount', 'quantity']
    data['items'].forEach( item => {
        required.forEach( req => {
            if(!item[req]) throw new Error(`Parâmetros incorretos. Há informações ausentes na passagem de dados dos itens [data.items].`)
        })
    })
}