const asyncHandler = require("express-async-handler");
const Room = require("../models/stockroom");
const jwt = require("jsonwebtoken");

//change stock room name, found by owner/username
const changeName = asyncHandler(async (req, res) => {
	const code = JSON.stringify(req.body.id);
	let newName = "My Room";
	await Room.updateOne({ org: "A123" }, { $set: { name: newName } }).then(
		function (err, result) {
			if (!err) {
				res.status(200).json({ message: "success" });
			} else {
				throw err;
			}
		}
	);
});

//to use function in route
module.exports = {
	changeName,
};
