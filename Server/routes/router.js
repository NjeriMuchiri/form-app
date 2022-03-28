const express = require('express');
const router = express.Router();
const controll = require('../controllers/controll.js');

router.post('/send', controll.send);

module.exports = router;