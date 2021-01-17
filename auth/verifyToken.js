import jwt from 'jsonwebtoken';
import User from '../models/user/User';

export default async function(token){
    try {
        const {id} =  jwt.verify(token, process.env.SECRET);

        const user = await User.findOne({_id: id});
      
        return user;

    } catch(e){
        console.log(e);
        throw new Error("Token inválido!")
    }
}