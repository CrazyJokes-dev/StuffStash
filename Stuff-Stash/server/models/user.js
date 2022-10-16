const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organizationID: {
        type: String,
        required: false
    }
});

//const UserModel = mongoose.model("user", UserSchema);
module.exports = mongoose.model('login', UserSchema);