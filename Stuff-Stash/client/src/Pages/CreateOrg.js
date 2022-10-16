//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import "../App.css";
import { useState } from "react";

const CreateOrg = () => {
  const [name, setorgname] = useState("");
  const [OrgAccessCode, setorgCode] = useState("");

  // Adds new Org
  const addOrg = async (e) => {
    e.preventDefault();
    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createOrg', {
    const res = await fetch("http://localhost:3000/api/v1/org/createOrg", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        OrgAccessCode,
      }),
    });

    const data = res.json();
    console.log("data -- ", data);

     data.then((response)=>{alert(response.msg);})
  };

  const handlename=(e)=>{
    setorgname((e.target.value).trimStart())
  
  }
  
  const handleaccess=(e)=>{
    setorgCode((e.target.value).trimStart())
  
  }
  
  
  
  const resetInput = () => {
    setorgname("");
    setorgCode("");
  };

  return (
    <div className="App">
      <div className="usersDisplay"></div>

      <div>
        <form>
          <h1>Enter an organization name:</h1>
          <input
            type="text"
            value={name} size="50"
            onChange={handlename}
          />
          <h1>Enter an organization AccessCode:</h1>
          <input
            type="text"
            value={OrgAccessCode} size="50"
            onChange={handleaccess}
          /><br /><br />
          <button onClick={addOrg}>Submit</button>&nbsp;&nbsp;
          <button onClick={resetInput}>Reset</button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrg;
