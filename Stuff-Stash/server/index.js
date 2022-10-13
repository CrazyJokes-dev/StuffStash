const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user");

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

app.get("/stockrooms", stockrooms.getRoom);

app.listen(PORT, () => {
	console.log("SERVER LISTENING ON PORT ", PORT);
});
