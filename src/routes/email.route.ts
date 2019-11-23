import { Router, Request, Response } from 'express';
import EmailHandler from '../controller/email.controller';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
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

export = router;
