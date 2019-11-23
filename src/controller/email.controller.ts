import nodemailer from 'nodemailer';
import { Client } from '../models/client.model';
require('dotenv').config();

export default class EmailHandler {
  static async sendEmail(client: Client): Promise<any> {
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_ACC,
          clientId: process.env.G_EMAIL_CLIENT_ID,
          clientSecret: process.env.G_EMAIL_SERECT,
          refreshToken: process.env.G_EMAIL_REFRESH,
          expires: 1484314697598
        }
      });
      const status: boolean = await new Promise((rsv, rjt) => {
        transporter.sendMail(
          {
            from: process.env.EMAIL_ACC,
            to: process.env.EMAIL_RECIPIENT,
            subject: `Enquiry from: ${client.firstName} ${client.lastName}`,
            text: `Client Name: ${client.firstName} ${client.lastName} \nMobile: ${client.mob} \nEmail: ${client.email} \nEnquiry: ${client.comment} \n
              `
          },
          (err, _) => {
            if (err) {
              return rjt(false);
            }
            return rsv(true);
          }
        );
      });

      return {status};
    } catch (err) {
      return {
        error: true,
        message: err.message
      };
    }
  }
}
