import {Router} from 'express';
import verifyToken from './verifyToken';
import { paymentStatus } from '../controllers/User';
import cors from 'cors';

const app = Router();

app.use(cors());

app.get('/:id/paymentStatus', verifyToken, async (req, res) => {
    const status = await paymentStatus(req.params.id)
    res.json({status})
})


export default app;