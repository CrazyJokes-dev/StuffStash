const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user");

const OrgModel = require("./models/OrgModel");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const users = require("./routes/users");
const orgs = require("./routes/orgs");
const bcrypt = require("bcrypt");
  const saltRounds = 12; // <-- The lower the number the more hashes per second. Higher = less hashes per second
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

app.get("/api/v1/users/", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
    .limit(1)
    .sort({ $natural: -1 });
});

app.get("/api/v1/users/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/api/v1/users/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.get("/", (req, res) => {
  res.send({ msg: "hello world" });
});

app.use("/api/v1/users", users);

//ORGINZATION API REQUESTS

//This finds most recent Org
app.get("/api/v1/orgs", (req, res) => {
  OrgModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
    .limit(1)
    .sort({ $natural: -1 });
});

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

// app.post("/api/v1/users/createOrg", async (req, res) => {
//   const { name, OrgAccessCode } = req.body;
//   OrgModel.findOne({ OrgAccessCode: OrgAccessCode }).then((org) => {
//     if (org) return res.status(400).json({ msg: "Org code already exists" });
//     const newOrg = new OrgModel({
//       name,
//       OrgAccessCode,
//     });
//     newOrg.save();
//   });
// });

app.post("/api/v1/users/createOrg", (req, res) => {
  const { name, OrgAccessCode } = req.body;

  // Checks to see if the username/password that was entered, wasn't empty.
  // If it was empty, displays a message on screen telling the user to enter them.
  //if (OrgAccessCode) {
  //  return res
  //    .status(400)
   //   .json({ msg: "Please enter a username and a password" });
//  }

  // Checks to see if another username already exists in the database and rejects it if there is one.
  OrgModel.findOne({ OrgAccessCode: OrgAccessCode }).then((org) =>{ 
    if (org) return res.status(400).json({ msg: "User already exists" });

    // This creates a model entry into the database with all the current new registration information.
    const newOrg = new OrgModel({
      name,
      OrgAccessCode,
    });

    // encrypts the password with hashing
    bcrypt.genSalt(saltRounds, (err, salt) =>
      bcrypt.hash(newOrg.OrgAccessCode, salt, (err, hash) => {
        if (err) throw err;

        newOrg.OrgAccessCode = hash;

        // saves the user to the database
        // must be inside bcrypt.hash() or else the password saved won't be encrypted
        newOrg
          .save()
          .then(res.json({ msg: "Successfully Registered" }))
          .catch((err) => console.log(err));
      })
    );
  });
});

//app.use("/api/v1/orgs/", orgs);

app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT ", PORT);
});
