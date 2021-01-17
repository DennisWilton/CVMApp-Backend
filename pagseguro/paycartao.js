import {baseUrl, isDevelopment} from '.';
import axios from 'axios';
import xml2js from 'xml-js';

export default async function({...data}){
    try{
        console.log("Solicitação de cartão atendida:");
        console.log(`Validando dados...`)

        validaDados(data);
        
        console.log(`Validação bem sucedida.`)
        console.log(`Gerando pagamento no cartão...`);

        const xml = `<payment>
        <mode>default</mode>
        <method>creditCard</method>
        <sender>
            <name>${data.name}</name>
            <email>${data.email}</email>
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
        <items>
            <item>
                <id>1</id>
                <description>Participação do Acampamento CVM 2021</description>
                <quantity>1</quantity>
                <amount>230.00</amount>
            </item>
        </items>
        <extraAmount>0.00</extraAmount>
        <reference>R123456</reference>
        <shipping>
         <addressRequired>false</addressRequired>
        </shipping>
        <creditCard>
            <token>${data.card.token}</token>
           <installment>
                 <quantity>1</quantity>
                 <value>230.00</value>
            </installment>
            <holder>
                <name>${data.card.name}</name>
                <documents>
                    <document>
                        <type>CPF</type>
                        <value>${data.card.cpf}</value>
                    </document>
                </documents>
                <birthDate>${data.card.birthdate}</birthDate>
                <phone>
                    <areaCode>${data.card.phoneAreaCode}</areaCode>
                    <number>${data.card.phoneNumber}</number>
                </phone>
            </holder>
            <billingAddress>
                <street>${data.card.billingStreet}</street>
                <number>${data.card.billingNumber}</number>
                <complement>${data.card.billingComplement}</complement>
                <district>${data.card.billingDistrict}</district>
                <city>${data.card.billingCity}</city>
                <state>${data.card.billingState}</state>
                <country>BRA</country>
                <postalCode>${data.card.billingCEP}</postalCode>
            </billingAddress>
        </creditCard>
    </payment>`;

        const config = {
            params: { email: process.env.PAGSEGURO_EMAIL, token: process.env.PAGSEGURO_TOKEN },
            headers: {
                'Content-Type': 'application/xml'
            }        
        }

        const call = axios.post(`${baseUrl}/v2/transactions/`, xml, config);
        const resultado = (xml2js.xml2js(await (await call).data, {compact: true, ignoreDeclaration: true}));
        return await resultado;
    }catch(e){
        throw e;
    }
}


function validaDados(data){
    let required;
    
    required = ['hash', 'name', 'email', 'phone', 'cpf', 'items', 'card'];
    required.forEach( req => {
        if(!data[req]) throw new Error(`Parâmetros incorretos. Está faltando data.${req}.`)
        console.log(`${req} > ${data[req]}`)
    })

    required = ['areaCode', 'number'];
    required.forEach( req => {
        if(!data['phone'][req] ) throw new Error("Parâmetros incorretos. [data.phone] precisa receber areaCode e number.")
    })

    if(!Array.isArray(data['items'])) throw new Error(`Parâmetros incorretos. [data.items] precisa ser um array/lista de itens.`)
    
    //Itens
    required = ['id', 'description', 'amount', 'quantity']
    data['items'].forEach( item => {
        required.forEach( req => {
            if(!item[req]) throw new Error(`Parâmetros incorretos. Há informações ausentes na passagem de dados dos itens [data.items].`)
        })
    })

    //Cartão
    required = ["token", "name", "cpf", "birthdate", "phoneAreaCode", "phoneNumber", "billingStreet", "billingNumber", "billingComplement", "billingDistrict", "billingCity", "billingState", "billingCEP"]
    data['card'].forEach( item => {
        required.forEach( req => {
            if(!item[req]) throw new Error(`Parâmetros incorretos. Há informações ausentes na passagem de dados dos itens [data.card].`)
        })
    })
}