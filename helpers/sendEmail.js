require ('dotenv').config();
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    }
)

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail