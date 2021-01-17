export default async function setPaymentStatus(transaction){

    //user
    // console.log(this);

    switch(transaction.status){
        case 1: //aguardando
        case 2: //em análise
            this.payment = this.payment || {};
            this.payment.actualCode     = transaction.code;
            this.payment.actualStatus   = transaction.status;
            this.isConfirmado = false;
            this.save();
            break;
        case 7: //cancelado
            this.payment = this.payment || {};
            this.payment.failedCodes    = this.payment.failedCodes || []
            this.payment.failedCodes.push(this.payment.actualCode);
            this.payment.actualCode     = null;
            this.payment.actualStatus   = transaction.status;
            this.isConfirmado = false;
            await this.save();
            break;
        case 3: //pago
        case 4: //disponível para saque
            this.payment.actualStatus = transaction.status;
            this.isConfirmado  = true;
            await this.save();
            break;
        case 5: //em disputa
        case 6: //devolvido
        case 8: //debitado
        case 9: //retenção temporária
        default:
            return false;
    }
}