import User from '../../../models/user/User';
import jwt from 'jsonwebtoken';

const nullUser = {
    name: false,
    cpf: false,
    email: false
}

export default {
    Query: {
        login: async (_, {cpf, password}) => { 

            cpf = cpf.replace(/\D/g, "");

            const user = await User.findOne({cpf});
            if(!user) throw new Error(`Usuário não encontrado!`);
            
            const verifyPassword = user.verifyPassword(password);
            if(!verifyPassword) throw new Error("Senha inválida!");

            const _user = user.toObject();
            _user.password = undefined;
            _user.token = jwt.sign({id: _user._id}, process.env.SECRET);
            
            return _user;
        },
        verify_token: async (_, {token, ...args}) => {
            try {

                const {id} = jwt.verify(token, process.env.SECRET)

                const user = await User.findOne({_id: id});
                const _user = user.toObject();
                _user.password = undefined;
                _user.token = jwt.sign({id: _user._id}, process.env.SECRET);

                return _user;
            } catch(e){
                console.log(e);
                throw new Error("Token inválido!")
            }
        }
    }
}