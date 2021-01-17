import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next){
    try{
        console.log( (req.headers.authorization.split(" ").length !== 2 || req.headers.authorization.split(" ")[0] !== 'Bearer') );
        if(!req.headers.authorization) return res.status(403).json({status: false, message: 'Usuário não autorizado.'});
        if(req.headers.authorization.split(" ").length !== 2 || req.headers.authorization.split(" ")[0] !== 'Bearer') return res.status(400).json({status: false, message: 'Usuário não autorizado!'});

        
        const token = req.headers.authorization.split(" ")[1];
        
        const data = jwt.verify(token, process.env.SECRET)

        next();
    }catch(e){
        res.status(400).json({status: false, message: 'Falha de segurança de autorização.'});
    }
    
}