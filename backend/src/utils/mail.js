import transporter from "../configurations/nodemailer";
import {} from 'dotenv/config'

const sendMail = async (reciever)=> {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `BARSVSBARS < ${process.env.MAIL_GMAIL} >`, // sender address
      to: reciever.to, // list of receivers
      subject: reciever.subject, // Subject line
      text: reciever.message, // plain text body
    //   html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
export default sendMail