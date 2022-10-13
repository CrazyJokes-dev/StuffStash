//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import '../App.css';
import { useState, useEffect } from "react";
import validator from 'validator';
//function AddUserOrg(){

const AddUserOrg = () => {



    const [orgname,setorgname]=useState(" ")
    const [orgid,setorgid]=useState(" ")
    const [userid,setuserid]=useState(" ")
    
    


  

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
    
  const addOrg = async (e) => {
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

const handleuser=(e)=>{
  setuserid((e.target.value).trimStart())

}

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
        <h1>orgname</h1>
            <input type="text" value={orgname} placeholder="Enter organization name" onChange={handleorg}></input>
            <h1>orgid</h1>
            <input type="text" value={orgid} placeholder="Enter organization ID" onChange={handleid}></input>
            <h1>userid</h1>
            <input type="text" value={userid} placeholder="Enter User ID" onChange={handleuser}></input>
            <button onClick={addOrg}>Submit</button>
      </form>
      </div>
   
  
  );

}

export default AddUserOrg;