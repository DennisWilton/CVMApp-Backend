import {Router} from 'express';
import verifyToken from './verifyToken';
import { paymentStatus } from '../controllers/User';
import cors from 'cors';
import User from '../models/user/User';

const app = Router();

app.use(cors());

app.get('/:id/paymentStatus', verifyToken, async (req, res) => {
    const status = await paymentStatus(req.params.id)
    res.json({status})
})


app.get('/', verifyToken, async (req, res) => {

    const users = await User.find({}, ['-password']);

    res.json(users.map( u => u.toObject()))
})


app.get('/:id', verifyToken, async (req, res) => {

    const user = await User.findById(req.params.id, ['-password', '-__v']);

    res.json(user.toObject())
})

export default app;