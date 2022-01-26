import cors from 'cors';
import express from 'express';
import Routes from './routes/routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(Routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
