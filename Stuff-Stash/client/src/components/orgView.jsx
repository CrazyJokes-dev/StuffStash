import { useState, useEffect, Component } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Axios from "axios";
import React from "react";

function addToggle() {
  
}

const OrgViewDashboard = () => {
  const [listOfOrgs, setListOfOrgs] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");
  //For testing
  //const userid = "Winners";
  //const userid = "username";

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    Axios.get(`http://localhost:3000/api/v1/orgs/OrgView/${userid}`)
      .then((response) => {
        //console.log(response);
        setListOfOrgs(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [userid]);

  //   console.log(Object.entries(listOfOrgs));
  //   if (error || !Array.isArray(listOfOrgs)) {
  //     return <p>There was an error loading your data!</p>;
  //   }

  return (
    <React.Fragment>
      {Object.entries(listOfOrgs).map(([key, value]) => {
        return (
          <ul className="list-group list-group-flush">
            {value.map((el) => {
              return (
                <li className="list-group-item bg-transparent" key={el.name}>
                  <div className="container-fluid buttonItem shadowbtn">
                    {/* <Link to="#" exact style={linkStyle}>
                      <span className="btnLabel">{el.name}</span>
                    </Link> */}
                    <button className="toggle-btn" data-active="inactive">
                      <span className="btnLabel">{el.name}</span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        );
      })}
    </React.Fragment>
  );
};
export default OrgViewDashboard;
