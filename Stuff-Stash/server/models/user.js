const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  organizationID: [
    {
      name: String,
      Accesscode: String,
    },
  ],
});

const UserModel = mongoose.model("logins", UserSchema);
module.exports = UserModel;
//const UserModel = mongoose.model("user", UserSchema);
//module.exports = mongoose.model('login', UserSchema);
