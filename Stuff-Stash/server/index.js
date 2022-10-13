const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/user');
const OrgModel=require('./models/Orgmodel');
const users = require("./routes/users");
const orgs = require("./routes/orguser");
const cors = require('cors');
const PORT = process.env.PORT || 3000
const bcrypt = require("bcrypt");



app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://estefan:teamwork@cluster0.qf1w4nh.mongodb.net/TechStartUp?retryWrites=true&w=majority"
);

//app.get("/api/v1/users/", (req, res) => {
   // UserModel.find({}, (err, result) => {
       // if (err) {
       //     res.json(err);
       // } else {
        //    res.json(result);
       /// }}).limit(1).sort({$natural:-1});
//});

app.get("/api/v1/users/getUsers", (req, res) => {
 UserModel.find({}, (err, result) => {
      if (err) {
         res.json(err);
        } else {
           res.json(result);
        }
    });
});

//app.post("/api/v1/users/createUser", async (req, res) => {
    // const user = req.body;
    // const newUser = new UserModel(user);
     //await newUser.save();

   //  res.json(user);
//});

app.get('/', (req, res) => {
    res.send({msg:'hello world'})
})


app.post("/api/v1/users/adduserOrg",(req,res)=>{
  const { orgname,orgid,userid } = req.body;    


    if(!orgname||!orgid||!userid){
        return res.status(400).json({msg:"Please enter all the fields"});
    }
    OrgModel.findOne({name:orgname}).then((org) => {
    if (!org) return res.status(400).json({ msg: "Organization name does not exist" });
    
    bcrypt.compare(orgid,org.OrgAccessCode).then((isMatch)=>{
        if(!isMatch) return res.status(400).json({msg:"Invalid access code"});
        
        UserModel.findOneAndUpdate({username:userid},{$set:{organizationID:orgname}},{upsert:true}).then((result)=>{
        if(result) return res.json({msg:"User Added to organization"});

           })
          
    })
   })
 });


//app.use('/api/v1/users', users)

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT ", PORT);
});