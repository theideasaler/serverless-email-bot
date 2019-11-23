import express, { Request, Response } from 'express';
import EmailHandler from './src/controller/email.controller';

const app = express();
const port = 8080;

app.use('/email', async (req: Request, res: Response) => {
  try {
    const response = await EmailHandler.sendEmail(req.body);
    if (response.error) {
      res.status(500).send(response);
    } else {
      res.status(200).send(response);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
