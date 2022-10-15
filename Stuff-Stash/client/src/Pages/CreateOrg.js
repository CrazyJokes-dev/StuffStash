//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import "../App.css";
import { useState } from "react";

const CreateOrg = () => {
  const [name, setorgname] = useState(" ");
  const [OrgAccessCode, setorgCode] = useState(" ");

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
  };

  return (
    <div className="App">
      <div className="usersDisplay"></div>

      <div>
        <form>
          <h1>Enter an organization name:</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setorgname(e.target.value)}
          />
          <h1>Enter an organization id:</h1>
          <input
            type="text"
            value={OrgAccessCode}
            onChange={(e) => setorgCode(e.target.value)}
          />
          <button onClick={addOrg}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrg;
