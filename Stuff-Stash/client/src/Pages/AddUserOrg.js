//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import '../App.css';
import { useState, useEffect } from "react";
import validator from 'validator';
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";

//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//function AddUserOrg(){

const AddUserOrg = () => {

   const [orgname,setorgname]=useState(" ")
    const [orgid,setorgid]=useState(" ")
    //const [userid,setuserid]=useState(" ")

    let history = useHistory();
    
    const userid=ReactSession.get("username");


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
    const res = await fetch('http://localhost:3000/api/v1/users/adduserOrg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        orgname,
        orgid,
        userid,
      })
    })
    
    const data = res.json();
    console.log('data -- ', data);
    console.log(res.status);
    if(res.status==200){
        data.then((vars)=>{
           ReactSession.set("orgname",vars.org.name);
           data.then((response)=>{alert(response.msg);})
    });
      history.push("/viewstockroomFrontend");
    }
    else{
      data.then((response)=>{alert(response.msg);})
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


 const handleorg=(e)=>{
  setorgname((e.target.value).trimStart())

}

const handleid=(e)=>{
  setorgid((e.target.value).trimStart())

}

const resetInputField = () => {
  setorgname("");
  setorgid("");
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

     
     <div>
     <form>
           <h1>Enter Organization Name</h1>
           <input type="text"  value={orgname}  onChange={handleorg} size="50" />
           <h1>Enter Organization AccessCode</h1>
           <input type="text" value={orgid}  onChange={handleid} size="50" /><br />
           <br /><button onClick={addUser}>Submit</button>&nbsp;&nbsp;
           <button onClick={resetInputField}>Reset</button>
           

     </form>
     </div>
       
);
 
}

export default AddUserOrg;