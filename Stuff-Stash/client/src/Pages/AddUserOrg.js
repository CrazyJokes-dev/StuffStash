//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import "../App.css";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";
import React from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//function AddUserOrg(){

const AddUserOrg = () => {
  const [orgname, setorgname] = useState("");
  const [orgid, setorgid] = useState("");
  //const [userid,setuserid]=useState(" ")
  const [isShown, setIsSHown] = useState(false);

  let history = useHistory();

  const userid = ReactSession.get("username");

  //const fetchOrg = async () => {
  //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/orgs');
  //const res = await fetch('http://localhost:3000/api/v1/users');
  //const data = await res.json();
  //console.log("users/ - DATA ", data);
  //setRecentUser(data.data);
  //setRecentUser(data);
  //};

  // const fetchOrgs = async () => {
  // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/orgs/getOrgs');
  //  const data = await res.json();
  //  console.log("users/getUsers - DATA:", data);
  // setListOfUsers(data.data);
  //   setListOfUsers(data);
  // };

  const addUser = async (e) => {
    e.preventDefault();

    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createOrg', {
    const res = await fetch("https://stuffstash-a8fm9.ondigitalocean.app/api/v1/users/adduserOrg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgname,
        orgid,
        userid,
      }),
    });

    const data = res.json();
    console.log("data -- ", data);
    console.log(res.status);
    if (res.status === 200) {
      data.then((vars) => {
        ReactSession.set("orgname", vars.org.name);
        data.then((response) => {
          alert(response.msg);
        });
      });
      history.push("/dashboard");
    } else {
      data.then((response) => {
        alert(response.msg);
      });
    }

    // if (data.success) {
    //  await fetchUsers()
    //}
    //setName('');
    //Axios.post("/createUser", {
    //  name: name,
    //}).then((response) => {
    //  setListOfUsers([...listOfUsers,
    //    {
    //      name: name,
    //    },
    //  ]);
    //});
  };

  const handleorg = (e) => {
    setorgname(e.target.value.trimStart());
  };

  const handleid = (e) => {
    setorgid(e.target.value.trimStart());
  };

  const resetInputField = () => {
    setorgname("");
    setorgid("");
  };

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  //const handleuser=(e)=>{
  //setuserid((e.target.value).trimStart())

  //}

  // useEffect(() => {
  //   fetchUser()
  //})

  //useEffect(() => {
  //  fetchUsers()
  // }, [])

  return (
    //<div className="App">
    // <div className="usersDisplay">

    // {recentUser.map((user) => {
    //  return (
    //  <div>
    //   <h1>Hello {user.name}</h1>
    // </div>
    // );
    //  })}
    // </div>

    <React.Fragment>
      <div className="bg fill d-flex align-items-center justify-content-center area p-5">
        <div className="col d-flex align-items-center text-center justify-content-center">
          <form>
            
            <h2>Enter Organization Name:</h2>
            <input type="text" value={orgname} onChange={handleorg}  size="60"></input>
            <br/>
            <br/>
            <h2>Enter Organization AccessCode:</h2>
            <input  type={isShown ? "text" : "password"}  value={orgid} onChange={handleid}  size="60"/>
            <br />
            <div className="checkbox-container">
            <label htmlFor="checkbox">Show password?</label>
            <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
          </div>
            
            <br />
            <button onClick={addUser} size="50">Submit</button>&nbsp;&nbsp;
            <button onClick={resetInputField} size="50">Reset</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUserOrg;
