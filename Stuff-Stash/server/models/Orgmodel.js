const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const OrgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    OrgAccessCode: {
        type: String,
        required: true,
        unqiue : true
    },
});

//delcaring collection
module.exports = mongoose.model('organizations', OrgSchema);