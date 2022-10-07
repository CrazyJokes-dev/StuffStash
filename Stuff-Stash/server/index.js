const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
  const saltRounds = 12; // <-- The lower the number the more hashes per second. Higher = less hashes per second
const UserModel = require('./models/user');
const users = require('./routes/users');

const cors = require('cors');
const PORT = process.env.PORT || 3000

const {
    HOST,
    Port,
    SESS_SECRET,
    NODE_ENV,
    IS_PROD,
    COOKIE_NAME
} = require("./config/config");
const MAX_AGE = 1000 * 60 * 60 * 3; //Three hours

mongoose.connect(
    "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

// setting up the connect mongodb session store
const mongoDBstore = new MongoDBStore({
    uri: "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority",
    collection: "mySessions"
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// app.use(
//     session({
//         name: COOKIE_NAME,
//         secret: SESS_SECRET,
//         resave: true,
//         saveUninitialized: false,
//         store: mongoDBstore,
//         cookie: {
//             maxAge: MAX_AGE,
//             sameSite: false,
//             secure: IS_PROD
//         }
//     })
// );

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

            // const sessUser = { id: user.id, name: user.username };
            // req.session.user = sessUser; // Auto saves session data in mongo store

            res.json({ msg: " Logged In Successfully" });
        })
    })
})

// we haven't actually configured (frontend and backend) the logout or session cookies yet
//
//
//
// // checks if there is a valid session oreo cookie, then pretty much deletes it from the store
// app.delete("api/v1/users/logout", (req, res) => {
//     req.session.destroy((err) => {
//         // delete session data from the store using sessionID in the cookie
//         if (err) throw err;
//         res.clearCookie("session-id"); // clears the cookie containing expired sessionID
//         res.send("Logged out successfully");
//     })
// })

// // This will check if a user as already logged in by checking for a valid session cookie
// app.get("api/v1/users/authchecker", (req, res) => {
//     const sessUser = req.session.user;
//     if (sessUser) {
//         return res.json({ msg: "Authenticated Successfully", sessUser });
//     } else {
//         return res.status(401).json({ msg: "Unauthorized" });
//     }
// })


app.get('/', (req, res) => {
    res.send({msg:'hello world'})
})

app.use('/api/v1/users', users)

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});