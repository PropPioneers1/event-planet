const express = require('express');
const { addMessage, getMessage } = require('../Controler/MessageControlers');

const router = express.Router()

router.get('/',addMessage)
router.get('/:chatId',getMessage)


module.exports= router