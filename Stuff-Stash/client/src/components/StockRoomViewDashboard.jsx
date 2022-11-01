import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
//import Axios from "axios";
import React from "react";

const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState({});
  const [OrgName, setOrgName] = useState({});
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

  const fetchOrgName = async () => {
    // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users');
    const res = await fetch(
      `http://localhost:3000/api/v1/users/viewstock${OrgName}`
    )
      .then((response) => {
        //console.log(response);
        setListOfStockRoom(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchOrgName();
  });

  //   console.log(Object.entries(listOfOrgs));
  //   if (error || !Array.isArray(listOfOrgs)) {
  //     return <p>There was an error loading your data!</p>;
  //   }

  return (
    <React.Fragment>
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <ul className="list-group list-group-flush">
            {value.map((el) => {
              return (
                <li className="list-group-item bg-transparent" key={el.name}>
                  <div className="container-fluid buttonItem shadowbtn">
                    <Link to="#" exact style={linkStyle}>
                      <span className="btnLabel">{el.name}</span>
                    </Link>
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
export default StockRoomViewDashboard;
