export const isDevelopment = true;

export const baseUrl = isDevelopment ? 'https://ws.sandbox.pagseguro.uol.com.br'  : 'https://ws.pagseguro.uol.com.br';
export const routes = require('./routes').default;