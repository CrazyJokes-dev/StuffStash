const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
  const saltRounds = 12; // <-- The lower the number the more hashes per second. Higher = less hashes per second
const UserModel = require('./models/user');
const users = require('./routes/users');

const cors = require('cors');
const PORT = process.env.PORT || 3000

mongoose.connect(
    "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors());

app.get("/api/v1/users/", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }}).limit(1).sort({$natural:-1});
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

app.post("/api/v1/users/login", (req, res) => {
    const { username, password } = req.body;


    if (!username || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    UserModel.findOne({ username }).then((user) => {
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch) return res.status(400).json({ msg: "Invalid credentials"});

            res.status(200).json({ msg: " Logged In Successfully", user });
        })
    })
})

app.get('/', (req, res) => {
    res.send({msg:'hello world'})
})

app.use('/api/v1/users', users)

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});