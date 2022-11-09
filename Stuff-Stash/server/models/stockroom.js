var path = require('path');
const assetSchema = require(path.resolve(__dirname, "./Asset.js"));
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//creating our stockroom schema. as of sprint 1, this will always be empty
//so we only need a name and a way to identify which org this belongs to.
const StockroomSchema = new mongoose.Schema({
    //stockrooms will have a name...
    name: {
        type: String,
        required: true,
    },
    //a tag to identify what organization it belongs to...
    org: {
        type: String,
        required: true
    },
    //and a place to store assets (empty for now)
    assets: {
        type: [assetSchema.Schema]
    }

});

module.exports = mongoose.model('stockrooms', StockroomSchema);
