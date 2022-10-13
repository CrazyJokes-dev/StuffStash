const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
const OrgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    OrgAccessCode: {
        type: String,
        required: false,
    },
});

//delcaring collection
//no need to declare this collection in db, will be done automatically 
const OrgModel= mongoose.model('organizations', OrgSchema);
module.exports=OrgModel;
