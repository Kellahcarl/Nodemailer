const content = require("./calenderObject");

const messageObj = {
    from: {
        name: 'caleb kellah',
        address: `${process.env.EMAIL_USER}`
    },
    to: 'baraka608@student.mmarau.ac.ke',
    subject: "Friends and colleagues get together",
     html: `<div>
                <h4 style="text-align: center">Friends and colleagues get together</h4>
                <p style="text-align: center; color: grey">Come lets have fun</p>
                <p style="text-align: center; color:grey;">Bring along your friends</p>
                <p style="text-align: center;color:grey">Meet new people and make new friends</p>
                
       </div>`,
     icalEvent: {
        content: content
      },
  
}

module.exports = messageObj