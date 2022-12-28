const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.orderController.findAll);

module.exports = router;
