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
    },
});

//delcaring collection
//no need to declare this collection in db, will be done automatically 
module.exports = mongoose.model('organizations', OrgSchema);