const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	owner: {
		type: String,
		required: true,
	},
	roomName: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("stockroom", RoomSchema, "test");
