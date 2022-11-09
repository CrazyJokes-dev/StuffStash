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

//app.get("/api/v1/users/", (req, res) => {
// UserModel.find({}, (err, result) => {
// if (err) {
//     res.json(err);
// } else {
//    res.json(result);
/// }}).limit(1).sort({$natural:-1});
//});

//app.get("/api/v1/users/getUsers", (req, res) => {
//UserModel.find({}, (err, result) => {
//if (err) {
//  res.json(err);
//} else {
//res.json(result);
//}
//});
//});

//app.post("/api/v1/users/createUser", async (req, res) => {
// const user = req.body;
// const newUser = new UserModel(user);
//await newUser.save();

//  res.json(user);
//});

//app.get('/', (req, res) => {
//  res.send({msg:'hello world'})
//})

app.post("/api/v1/users/adduserOrg",(req,res)=>{
  const {orgname,orgid,userid} = req.body;    


    if(!orgname||!orgid){
        return res.status(400).json({msg:"Please enter all the fields"});
    }
    OrgModel.findOne({name:orgname}).then((org) => {
    if (!org) return res.status(400).json({ msg: "Organization name does not exist" });

    bcrypt.compare(orgid,org.OrgAccessCode).then((isMatch)=>{
        if(!isMatch) return res.status(400).json({msg:"Invalid access code"});


       const finduser=UserModel.findOne({username:userid});
        finduser.findOne({$and:[{"organizationID.name":orgname},{"organizationID.Accesscode":orgid}]}).then((msg)=>{
        if(msg) return res.status(400).json({ msg: "User alreadys exists under the Organization" });
        else{
            const a={"name":orgname,"Accesscode":orgid} ; 
            UserModel.findOneAndUpdate({username:userid},{$push:{organizationID:[a]}},{upsert:true}).then((result)=>{
            if(result) return res.status(200).json({msg:"User added successfully",org});
           })
           }

        })       
    })  
   })
});

// app.post("/api/v1/users/createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new UserModel(user);
//   await newUser.save();

//   res.json(user);
// });

// app.get("/", (req, res) => {
//   res.send({ msg: "hello world" });
// });

app.post("/api/v1/users/createUser", (req, res) => {
  const { username, password, organizationID } = req.body;

  // Checks to see if the username/password that was entered, wasn't empty.
  // If it was empty, displays a message on screen telling the user to enter them.
  if (!username || !password) {
    return res
      .status(399)
      .json({ msg: "Please enter a username and a password" });
  }

  // Checks to see if another username already exists in the database and rejects it if there is one.
  UserModel.findOne({ username: username }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    // This creates a model entry into the database with all the current new registration information.
    const newUser = new UserModel({
      username,
      password,
      organizationID: []
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
  });
});

app.post("/api/v1/users/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  UserModel.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

//this creates an asset under a given stockroom
app.post("/api/v1/addAsset", async (req, res) => {
  console.log("Adding asset");
  const stockroom = req.body.stockroomName;
  const asset = req.body.asset;
  const { identifier, category, isAvailable } = req.body.asset;
  const filter = { name: stockroom };
  if (
    identifier == null ||
    category == null ||
    isAvailable == null ||
    stockroom == null
  ) {
    return res.status(400).json({ msg: "Missing information" });
  } else {
    const update = { $push: { assets: asset } };
    await StockroomModel.findOneAndUpdate(filter, update);
    res.json(asset);
  }
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
      return res.status(400).json({ msg: "Organization already exists" });

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
            res.status(200).json({ msg: "Successfully Registered", newOrg })
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
      return res.status(400).json({ msg: "Org does not exist " + nameFeild });
    }
    // OrgModel.save;
    return res.status(200).json({ msg: "Done, succesfully", org });
  });
});

app.get("/api/v1/users/viewstock/:orgName", (req, res) => {
  const orgName = req.params.orgName;

  StockroomModel.find({ org: orgName }, { name: 1, _id: 0 }).then((result) => {
    if (result == "")
      return res.status(400).json({
        msg: "Sorry,We did not find any stockrooms under this organization",
      });
    else {
      return res.json(result);
    }
  });
});

// if(err) return res.status(400).json({msg:"Sorry,We did not find any stockrooms under this organization"})
// else return res.json(result);
// app.post("/api/v1/users/viewstock", (req, res) => {
//   const { orgid } = req.body;
//   StockroomModel.find({ org: orgid }).then(function (err, result) {
//     if (err) {
//       console.log("error");
//       throw err;
//       //throw err;
//     }
//   });
//   res.status(200).json({ msg: "why wont you work" });
// });


app.get("/api/v1/orgs/OrgView/:userid", (req, res) => {
  const userid = req.params.userid;
  //console.log(userid);
  UserModel.findOne(
    { username: userid },
    { "organizationID.name": 1, _id: 0 }
  ).then((view) => {
    if (view) {
      console.log(view);
      return res.json(view);
    } else {
      return res.status(400).json({
        msg: "Sorry,We did not find any organization for this Username",
      });
    }
  });
});


app.use("/api/v1/orgs/", orgs);

app.use("/api/v1/users", users);

app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT ", PORT);
});
