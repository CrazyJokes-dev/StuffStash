//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com
import "../App.css";
import { useState } from "react";
import React from "react";
const RenameOrgPage = () => {
  const [nameFeild, setorgname] = useState("");
  const [newname, setneworgname] = useState("");

  // Renames Orginizaiton
  const RenameOrg = async (e) => {
    e.preventDefault();

    //Testing to see what the inputs are before sending to backend
    console.log(nameFeild, newname);

   // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/RenameOrgization', {
     const res = await fetch(
       'https://stuffstash-a8fm9.ondigitalocean.app/api/v1/orgs/RenameOrgization',
      {
        method: "POST",
        headers: {
          Accept: "application/json",
         "Content-Type": "application/json",
       },
         body: JSON.stringify({
          nameFeild,
           newname,
        }),
        
      }
    );

   const data = res.json();
    console.log("data -- ", data);

    data.then((response)=>{alert(response.msg);})

  };

  const reset = () => {
    setorgname("");
    setneworgname("");
  };

  const Namefunction=(e)=>{
    setorgname((e.target.value).trimStart())
  
  }
  
  const CodeFunction=(e)=>{
    setneworgname((e.target.value).trimStart())
  
  }
  

  return (
    <React.Fragment>
     <div className="bg fill d-flex align-items-center justify-content-center area p-5">
 
 <div className="col d-flex align-items-center text-center justify-content-center">
        <form>
          <h1>Enter an organization name:</h1>
          <input
            id="name"
            name="name"
            type="text"
            value={nameFeild} size="50"
            onChange={Namefunction}
          />
          <h1>Enter a new organization name:</h1>
          <input
            id="newname"
            name="newname"
            type="text" size="50"
            value={newname}
            onChange={CodeFunction}
          /><br /><br />
          <button onClick={RenameOrg}>Submit</button>&nbsp;&nbsp;
          <button onClick={reset}>Reset</button>
        </form>
      </div>
    </div>
    </React.Fragment>
  );
};

export default RenameOrgPage;
