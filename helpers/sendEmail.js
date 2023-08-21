const dotenv = require("dotenv");
dotenv.config();
const { SENDGRID_API_KEY } = process.env;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "darinakarmazintest@ukr.net" };
  try {
    sgMail.send(mail);
    return true;
  } catch (error) {
    throw error;
  }
};

// const mail = {
//   to: "sergeieva.darina@gmail.com",
//   from: "darinakarmazintest@ukr.net",
//   subject: "New application",
//   html: "<p>New application!!!</p>",
// };

// sgMail
//   .send(mail)
//   .then(() => console.log("Succsess"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
