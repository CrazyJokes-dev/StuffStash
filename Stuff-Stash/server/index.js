const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/user');

const OrgModel = require('./models/OrgModel');
const cors = require('cors');
const PORT = process.env.PORT || 3000
const users = require('./routes/users');
const orgs = require('./routes/orgs');

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

app.post("/api/v1/users/createUser", async (req, res) => {
     const user = req.body;
     const newUser = new UserModel(user);
     await newUser.save();

     res.json(user);
});

app.get('/', (req, res) => {
    res.send({msg:'hello world'})
})

app.use('/api/v1/users', users)










//ORGINZATION API REQUESTS
app.get("/api/v1/orgs", (req, res) => {
    OrgModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }}).limit(1).sort({$natural:-1});
});

app.get("/api/v1/orgs/getOrgs", (req, res) => {
    OrgModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/api/v1/users/createOrg", async (req, res) => {
     const org = req.body;
     const newOrg = new OrgModel(org);
     await newOrg.save();

     res.json(org);
});



app.use('/api/v1/orgs', orgs)

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});