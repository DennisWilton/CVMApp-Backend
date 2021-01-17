import User from '../models/user/User';

export async function paymentStatus(UserID){
    const user = await User.findById(UserID);
    
    if(!user) return null;


    return {...user.payment.toObject(), isConfirmado: user.isConfirmado};
}