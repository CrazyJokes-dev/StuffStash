const express = require('express');
const router = express.Router();
const {createStockroom} = require('../controllers/stockrooms.js');

router
    .route('/')
    .post(createStockroom)

module.exports = router;