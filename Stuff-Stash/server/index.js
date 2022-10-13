const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user");

const cors = require("cors");
const PORT = process.env.PORT || 3000;

const users = require("./routes/users");
const room = require("./routes/stockrooms");

app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

//change room name
app.post("/stockrooms", room.changeName);

app.listen(PORT, () => {
	console.log("SERVER LISTENING ON PORT ", PORT);
});
