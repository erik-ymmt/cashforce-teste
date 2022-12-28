const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.providerController.findAll);

module.exports = router;
