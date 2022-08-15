import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b0dfb85170ed7b", 
      pass: "fb4bc080c328e4"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body} : SendMailData) {
        await transport.sendMail({
           from:'Equipe Feedget <raisaalmeida695@gmail.com',
           to:'Raisa Almeida <raissaap32@gmail.com>',
           subject,
           html:body,
       })
    }
}