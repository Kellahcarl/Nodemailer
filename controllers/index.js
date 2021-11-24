"use strict";

const sendMailHandler = (req, res)  => {
    res.send(Date.now().toString())
}

module.exports ={ 
    sendMailHandler
}