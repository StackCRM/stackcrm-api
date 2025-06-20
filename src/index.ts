import express from 'express';
import dotenv from 'dotenv';
import membersRouter from './routes/members';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('StackCRM API is live!');
});

app.use('/members', membersRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
