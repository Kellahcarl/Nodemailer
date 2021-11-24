const express = require("express")
const localPort = 5000
require('dotenv').config();
const cors = require('cors')

const app = express()

const mailRoute = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/sendmail', mailRoute);

app.get("*", (req, res) => {
    res.status(404).send({ message: "Page not found" });
  });

const PORT = process.env.MAILER_SERVER_PORT || localPort ;

app.listen(PORT, () => console.log(`App running on port:${PORT}`));