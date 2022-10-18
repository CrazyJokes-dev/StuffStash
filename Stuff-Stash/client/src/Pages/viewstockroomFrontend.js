import { Button } from "bootstrap";
import React from "react";
import { ReactSession } from "react-client-session";

const viewstockroomFrontend = () => {
  const orgid = ReactSession.get("orgid");
  const DisplayStockroom = async (e) => {
    e.preventDefault();
    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users', {

    const res = await fetch("http://localhost:3000/api/v1/users/viewstock", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgid,
      }),
    });
    if (res.status === 200) {
      alert("Valid stockroom is being displayed");
    }
    const data = res.json();
    console.log("data -- ", data);
    //if (data.success) {
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

  return (
    <div>
      <button onClick={DisplayStockroom}>DisplayStockroom</button>
    </div>
  );
};

export default viewstockroomFrontend;
