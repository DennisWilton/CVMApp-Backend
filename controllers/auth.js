import User from '../models/user/User'
import jwt from 'jsonwebtoken'

const Auth = {}

Auth.login = async function (req, res) {
  if (!req.body.password || !req.body.cpf) {
    res.json({ message: 'Requisição inválida.', success: false })
    return
  }

  const cpf = req.body.cpf.replace(/\D/g, '')
  const password = req.body.password

  const user = await User.findOne({ cpf })
  if (!user) {
    res.json({ message: `Usuário não encontrado!`, success: false })
    return
  }

  const verifyPassword = user.verifyPassword(password)
  if (!verifyPassword) {
    res.json({ message: `Senha inválida!`, success: false })
    return
  }

  const _user = user.toObject()
  _user.password = undefined
  _user.token = jwt.sign({ id: _user._id }, process.env.SECRET, {
    expiresIn: '2 days',
  })

  res.json({ token: _user.token, id: _user._id, name: _user.name })
  return
}

Auth.verifyToken = async function (req, res) {
  
    
    if (!req.body.token) {
        res.json({ success: false, message: 'Token ausente.' })
        return
    }
    
    const {token} = req.body;
    
    let id, _id;
    try {
        const { id } = jwt.verify(token, process.env.SECRET)
        if(!id) return res.json({ success: false, message: 'Token inválido!' });
        _id = id;
    }catch(e){
        return res.json({ success: false, message: 'Token inválido!' }); 
    }
    id=_id;
    
  const user = await User.findById(id)

  if(!user) { res.json({success: false, message: 'Token inválido!'}); return; }

  const _user = user.toObject()
  _user.password = undefined
  _user.token = jwt.sign({ id: _user._id }, process.env.SECRET, {
    expiresIn: '2 days',
  })

  const response = {token: _user.token};


  return res.json({token: _user.token, id: _user._id, name: _user.name});
}

export default Auth
