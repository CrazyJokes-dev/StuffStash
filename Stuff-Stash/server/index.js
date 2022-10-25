const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 12; // <-- The lower the number the more hashes per second. Higher = less hashes per second
const UserModel = require("./models/user");
const stockrooms = require("./controllers/stockrooms");
const StockroomModel = require("./models/stockroom");
const OrgModel = require("./models/OrgModel");
const users = require("./routes/users");
const orgs = require("./routes/orgs");
const room = require("./routes/stockrooms");
const Room = require("./models/stockroom"); //import user fr
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const { check } = require("express-validator");

mongoose.connect(
	"mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

/*
app.post("/signUp", (req, res) => {
	signup: async (req, res) => {
		const { username, password } = req.body;
		const newUser = new user({
			username,
			password,
		});
		try {
			await newUser.save();
			return res.status(201).json({
				success: true,
				message: "signup successful",
				data: newUser,
			});
		} catch (error) {
			return res.status(412).send({
				success: false,
				message: error.message,
			});
		}
	};
});*/

app.post("/api/v1/users/adduserOrg", (req, res) => {
	const { orgname, orgid, userid } = req.body;

	if (!orgname || !orgid) {
		return res.status(400).json({ msg: "Please enter all the fields" });
	}
	OrgModel.findOne({ name: orgname }).then((org) => {
		if (!org)
			return res
				.status(400)
				.json({ msg: "Organization name does not exist" });

		bcrypt.compare(orgid, org.OrgAccessCode).then((isMatch) => {
			if (!isMatch)
				return res.status(400).json({ msg: "Invalid access code" });

			UserModel.findOneAndUpdate(
				{ username: userid },
				{ $set: { organizationID: orgid } },
				{ upsert: true }
			).then((result) => {
				if (result)
					return res
						.status(200)
						.json({ msg: "User added successfully", org });
				else {
					return res
						.status(400)
						.json({ msg: "Something went wrong" });
				}
			});
		});
	});
});

app.post(
	"/api/v1/users/createUser",
	// username must be greater than 6 characters and unique
	check("username")
		.isLength({ min: 6 })
		.withMessage("must be at least 6 chars long")
		.custom((value) => {
			var query = UserModel.find({ username: value });
			return query.exec().then((user) => {
				if (user.length > 0) {
					return Promise.reject("username already in use");
				}
			});
		}),
	// password must be at least 6 chars long
	body("password")
		.isLength({ min: 6 })
		.withMessage("must be at least 6 chars long")
		.matches(/\d/)
		.withMessage("must contain a number"),
	//makes sure orgID field exists
	body("organizationID").exists(),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { username, password, organizationID } = req.body;
		const newUser = new UserModel({
			username,
			password,
			organizationID,
		});

		// encrypts the password with hashing
		bcrypt.genSalt(saltRounds, (err, salt) =>
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;

				newUser.password = hash;

				// saves the user to the database
				// must be inside bcrypt.hash() or else the password saved won't be encrypted
				newUser
					.save()
					.then(res.json({ msg: "Successfully Registered" }))
					.catch((err) => console.log(err));
			})
		);
	}
);

app.post("/api/v1/users/login", (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({ msg: "Please enter all fields" });
	}

	UserModel.findOne({ username }).then((user) => {
		if (!user)
			return res.status(400).json({ msg: "User does not exist" });

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch)
				return res.status(400).json({ msg: "Invalid credentials" });

			res.status(200).json({ msg: " Logged In Successfully", user });
		});
	});
});

app.get("/", (req, res) => {
	res.send({ msg: "hello world" });
});

//BEGIN STOCKROOM CALLS

//this create a stockroom with a given orgID and name
app.post("/api/v1/addStockroom", async (req, res) => {
	console.log("Adding stockroom");
	const stockroom = req.body;
	const newStockroom = new StockroomModel(stockroom);
	await newStockroom.save();
	res.json(stockroom);
});

//app.use("/stockrooms", room.changeName);

//END STOCKROOM CALLS

//ORGINZATION API REQUESTS
//All Orgs
app.get("/api/v1/orgs/getOrgs", (req, res) => {
	OrgModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

app.post("/api/v1/org/createOrg", (req, res) => {
	const { name, OrgAccessCode } = req.body;

	//Checks to see if another Organization already exists in the database and rejects it if there is one.
	OrgModel.findOne({ name }).then((org) => {
		if (org)
			return res
				.status(400)
				.json({ msg: "Organization already exists" });

		//This creates a model entry into the database with all the current new organiziton information.
		const newOrg = new OrgModel({
			name,
			OrgAccessCode,
		});

		// encrypts the password with hashing
		bcrypt.genSalt(saltRounds, (err, salt) =>
			bcrypt.hash(newOrg.OrgAccessCode, salt, (err, hash) => {
				if (err) throw err;

				newOrg.OrgAccessCode = hash;

				// saves the org to the database
				// must be inside bcrypt.hash() or else the password saved won't be encrypted
				newOrg
					.save()
					.then(
						res.status(200).json({
							msg: "Successfully Registered",
							newOrg,
						})
					)
					.catch((err) => console.log(err));
			})
		);
	});
});

app.post("/api/v1/orgs/RenameOrgization", (req, res) => {
	const { nameFeild, newname } = req.body;

	//Checks to see if another Organization already exists in the database and rejects it if there is NOT
	OrgModel.findOneAndUpdate(
		{ name: nameFeild },
		{ $set: { name: newname } }
	).then((org) => {
		if (!org) {
			return res
				.status(400)
				.json({ msg: "Org does not exist " + nameFeild });
		}
		// OrgModel.save;
		return res.status(200).json({ msg: "Done, succesfully", org });
	});
});

app.post("/api/v1/users/viewstock", (req, res) => {
	const { orgid } = req.body;
	StockroomModel.find({ org: orgid }).then(function (err, result) {
		if (err) {
			console.log("error");
			throw err;
			//throw err;
		}
	});
	res.status(200).json({ msg: "why wont you work" });
});

app.use("/api/v1/orgs/", orgs);

app.use("/api/v1/users", users);

app.listen(PORT, () => {
	console.log("SERVER LISTENING ON PORT ", PORT);
});
