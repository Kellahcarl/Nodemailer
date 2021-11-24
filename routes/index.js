const express = require('express');

const router = express.Router();

const { sendMailHandler } = require('../controllers/');

router.get('/', sendMailHandler);

module.exports = router;