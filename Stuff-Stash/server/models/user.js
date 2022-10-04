const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

//const UserModel = mongoose.model("user", UserSchema);
module.exports = mongoose.model('user', UserSchema);