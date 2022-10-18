const asyncHandler = require("express-async-handler");
const Room = require("../models/stockroom"); //import user from models

//check if orgId exists
const getRoom = asyncHandler(async (req, res) => {
  //replace with whatever you want to get room by
  //let name = "A123";
  const orgid = req.body;
  await Room.find({ org: orgid }).then(function (err, result) {
    if (err) {
      console.log("error");
      throw err;
      //throw err;
    }
  });
  res.send(userReturn);
});
module.exports = {
  getRoom,
};
