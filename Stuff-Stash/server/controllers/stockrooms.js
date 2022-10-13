const asyncHandler = require("express-async-handler");
const Room = require("../models/stockroom"); //import user from models

//check if orgId exists
const getRoom = asyncHandler(async (req, res) => {
	let name = "tester";
	await Room.find({ owner: name }).then(function (err, result) {
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
