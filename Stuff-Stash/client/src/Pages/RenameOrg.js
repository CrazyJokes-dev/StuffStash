//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import "../App.css";
import { useState } from "react";
const RenameOrgPage = () => {
  const [name, setorgname] = useState("");
  const [newname, setneworgname] = useState("");

  // Renames Orginizaiton
  const RenameOrg = async (e) => {
    e.preventDefault();
    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createOrg', {

    //Testing to see what the inputs are before sending to backend
    console.log(name, newname);

    const res = await fetch(
      "http://localhost:3000/api/v1/orgs/RenameOrgization",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          newname,
        }),
      }
    );

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
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setorgname(e.target.value)}
          />
          <h1>Enter a new organization name:</h1>
          <input
            id="newname"
            name="newname"
            type="text"
            value={newname}
            onChange={(e) => setneworgname(e.target.value)}
          />
          <button onClick={RenameOrg}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RenameOrgPage;
