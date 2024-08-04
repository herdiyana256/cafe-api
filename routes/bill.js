const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

router.get('/:tableNumber', billController.getBill);

module.exports = router;
