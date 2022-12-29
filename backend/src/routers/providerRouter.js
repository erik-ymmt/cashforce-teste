const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/:id', controller.providerController.findOne);

module.exports = router;
