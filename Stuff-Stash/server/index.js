const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user");
const Room = require("./models/stockroom"); //import user fr

const cors = require("cors");
const PORT = process.env.PORT || 3000;

const users = require("./routes/users");
const room = require("./routes/stockrooms");
const stockrooms = require("./controllers/stockrooms");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

app.post("/api/v1/users/viewstock", (req, res) => {
  const { orgid } = req.body;
  Room.find({ org: orgid }).then(function (err, result) {
    if (err) {
      console.log("error");
      throw err;
      //throw err;
    }
  });
  res.status(200).json({ msg: "why wont you work" });
});
//app.use("/api/v1/users/viewstock", stockrooms.getRoom);
app.use("/api/v1/users", users);
app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT ", PORT);
});
