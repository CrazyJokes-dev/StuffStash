//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import '../App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

const CreateOrg = () =>{

    const [name,setorgname]=useState(" ")
    const [OrgAccessCode,setorgCode]=useState(" ")
    const [ListOfOrgs, setListOfOrgs] = useState([]);
  

 // const fetchOrg = async () => {
   // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/orgs');
    //const res = await fetch('http://localhost:3000/api/v1/users');
   // const data = await res.json();
    //console.log("users/ - DATA ", data);  
    //setRecentUser(data.data);
    //setRecentUser(data);
  //};
    
  
  const fetchOrgs = async () => {
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/orgs/getOrgs');
    const data = await res.json();
   console.log("users/getUsers - DATA:", data);
   setListOfOrgs(data); 
  };
    
  const addOrg = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createOrg', {
    //const res = await fetch('http://localhost:3000/api/v1/users/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        OrgAccessCode
      })
    })
    
    const data = res.json();
    console.log('data -- ', data);
    if (data.success) {
      await fetchOrgs()
    }

 };

 useEffect(() => {
    fetchOrgs()
  })

  useEffect(() => {
    fetchOrgs()
  }, [])

return (

   <div className="App">
     <div className="usersDisplay">
        
     
     </div>

      <div>
      <form>
            <h1>Enter an organization name:</h1>
            <input type="text" value={name} onChange={(e)=>setorgname(e.target.value)}></input>
            <h1>Enter an organization id:</h1>
            <input type="text" value={OrgAccessCode} onChange={(e)=>setorgCode(e.target.value)}></input>
            <button onClick={addOrg}>Submit</button>
            </form>
      </div>
    </div>
  
  );
}

export default CreateOrg;