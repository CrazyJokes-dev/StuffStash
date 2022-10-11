const express = require('express');
const router = express.Router;
const {createStockroom} = require('..controllers/stockrooms.js');

router
    .route('/stockrooms')
    .post(createStockroom)

module.exports = router;