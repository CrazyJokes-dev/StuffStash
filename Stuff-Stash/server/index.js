const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/user');

const StockroomModel = require('./models/stockroom');
const stockrooms = require("./routes/stockrooms");

const cors = require('cors');
const PORT = process.env.PORT || 3000

const users = require('./routes/users')

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

//BEGIN STOCKROOM CALLS

app.post("/api/v1/stockrooms/createStockroom"), async  (req, res) =>
{
    const stockroom = req.body;
    const newStockroom = new StockroomModel(stockroom);
    await newStockroom.save();
    res.json(stockroom);
}

app.use('/api/v1/stockrooms/', stockrooms)

//END STOCKROOM CALLS

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});

