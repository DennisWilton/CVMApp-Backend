import express, {Router} from 'express';
import verifyToken from './verifyToken';
import cors from 'cors';
import Auth from '../controllers/auth';

const app = Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.post('/login', Auth.login)
app.post('/verify_token', Auth.verifyToken)


export default app;