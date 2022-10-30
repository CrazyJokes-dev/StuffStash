import "../App.css";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import React from "react";

const OrgViewDashboard = () => {
  const [listOfOrgs, setListOfOrgs] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  //const userid=ReactSession.get("username");
  const userid = "Winners";

  useEffect(() => {
    //Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers").then((response) => {
    Axios.get(`http://localhost:3000/api/v1/orgs/OrgView/${userid}`)
      .then((response) => {
        console.log(response);
        setListOfOrgs(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [userid]);

  //console.log(Object.entries(listOfOrgs));
  // if (error || !Array.isArray(listOfOrgs)) {
  //  return <p>There was an error loading your data!</p>;
  // }

  return (
    <div>
      {Object.entries(listOfOrgs).map(([keys, value]) => {
        return (
          <div key={keys}>
            {value.map((el) => {
              return (
                <div id={el.id}>
                  <button>{el.name}</button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default OrgViewDashboard;
