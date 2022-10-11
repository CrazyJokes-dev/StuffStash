const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
  const saltRounds = 12; // <-- The lower the number the more hashes per second. Higher = less hashes per second

const UserModel = require('./models/user');
const users = require('./routes/users');


const cors = require('cors');
const PORT = process.env.PORT || 3000

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

app.post("/api/v1/users/createUser", (req, res) => {
     const { username, password, organizationID } = req.body;
    
     // Checks to see if the username/password that was entered, wasn't empty.
     // If it was empty, displays a message on screen telling the user to enter them.
     if(!username || !password) {
        return res.status(399).json({ msg: "Please enter a username and a password"});
     }

     // Checks to see if another username already exists in the database and rejects it if there is one.
     UserModel.findOne({ username: username}).then((user) => {
        if (user) return res.status(400).json({ msg: "User already exists" });
     
     // This creates a model entry into the database with all the current new registration information.
     const newUser = new UserModel({
        username,
        password,
        organizationID
     });

     // encrypts the password with hashing
     bcrypt.genSalt(saltRounds, (err, salt) => 
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            
            // saves the user to the database
            // must be inside bcrypt.hash() or else the password saved won't be encrypted
            newUser.save()
                   .then(res.json({ msg: "Successfully Registered" } ))
                   .catch((err) => console.log(err));
        })

     );
    }); 
});

app.get('/', (req, res) => {
    res.send({msg:'hello world'})
})

app.use('/api/v1/users', users)

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});