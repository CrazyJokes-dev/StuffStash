const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    organizationID: {
        type: String,
        required:false,}
   
});

const UserModel = mongoose.model("logins", UserSchema);
module.exports = UserModel
//const UserModel = mongoose.model("user", UserSchema);
//module.exports = mongoose.model('login', UserSchema);
