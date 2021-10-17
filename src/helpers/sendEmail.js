import sendgrid from "@sendgrid/mail";

export default function sendEmail(msg, toEmailAddress){
  let message;
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  if (process.env.NODE_ENV === 'test') {
    message = {
      ...msg,
      mail_settings: {
        sandbox_mode: {
          enable: true
        }
      }
    };
  } else {
    message = msg;
  }

  const result = sendgrid.send({to: toEmailAddress, from: process.env.FROM_EMAIL, subject: 'email verification', text: message}).then(() => {
    console.log('email sent');
  }).catch((error) => {
    console.log({...error});
  })
  return result;
}
