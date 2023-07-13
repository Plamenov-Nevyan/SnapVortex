import { Email } from "../types/Email";
import nodemailer from 'nodemailer'
import { google } from "googleapis";
import { EmailValResp } from "../types/EmailValResp";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const oAuth = google.auth.OAuth2;

async function createTransporter(){
try {
  const oauth2Client = new oAuth(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  const accessToken = new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if(err){
        reject('Generating access token failed.')
      }
      resolve(token)
    })
  })
  const transporter = createNodemailerTransport(accessToken)

  return transporter
}catch(err){
  console.log(err)
}
}


function createNodemailerTransport(accessToken: any){
  return nodemailer.createTransport({
    service: "gmail", 
    port: 2525,
    secure: true,
    auth: {
      type: "oauth2",
      user: process.env.GOOGLE_USERNAME,
      pass: process.env.GOOGLE_APP_PASSWORD,
      accessToken,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN
    },
  } as SMTPTransport.Options);
}


export const sendEmail = async (emailData: Email) => {
  let mailOptions = {
    from : process.env.GMAIL_EMAIL,
    to : 'plamenovnevyan@gmail.com',
    subject : emailData.subject,
    html : `
    <h3>From :  ${emailData.sender}</h3>
    <h4>Hi, i'm ${emailData.sender}</h4>
    <p>${emailData.message}</p>
    `
  }

  let transporter = await createTransporter()

if(transporter !== undefined){
  let resp = await transporter.sendMail(mailOptions)
}

}

//  const checkIfEmailExists = async (email: string) => {
//   let resp = await fetch(`https://api.emailable.com/v1/verify?email=${email}&api_key=${process.env.EmailVerificationKey}`)
//   let data: any = await resp.json()
//   console.log(data)
//   if(data.state !== 'deliverable'){
//       return {
//           message : `Email adress doesn\'t exist or it\'s unsafe to use!`
//       }
//   }
//   else {
//    return { message : 'Success' }
//   }

// }

// module.exports = {
//     sendEmail,
//     // checkIfEmailExists
// }