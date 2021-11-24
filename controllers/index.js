"use strict";

const messageObj = require("../helpers/messageObject");
const sendEmail = require("../helpers/sendEmail");



const sendMailHandler = async (req, res)  => {
    try {
        await sendEmail(messageObj);
        return res.send("mail sent successfully")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={ 
    sendMailHandler
}