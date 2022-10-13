const asyncHandler = require("express-async-handler");
const Room = require("../models/stockroom");

//change stock room name, found by owner/username
const changeName = asyncHandler(async (req, res) => {
	const code = req.body.id;
	let newName = "success";
	await Room.updateOne(
		{ owner: "tester" },
		{ $set: { roomName: newName } }
	).then(function (err, result) {
		if (!err) {
			res.status(200).json({ message: "success" });
		} else {
			throw err;
		}
	});
});

//to use function in route
module.exports = {
	changeName,
};
