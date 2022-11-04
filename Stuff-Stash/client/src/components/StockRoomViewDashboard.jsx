import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
//import Axios from "axios";
import React from "react";
import Axios from "axios";

const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState({});
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");
  //For testing
  const orgName = "A123";
  // setOrgName(ReactSession.set()) -- Not Fully Finished
  //const userid = "Winners";
  //const userid = "username";

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  //this should be something like fectchStockrooms since that's what it is getting -Matt
  // const fetchOrgName = async () => {
  //   // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users');
  //   const res = await fetch(
  //     `http://localhost:3000/api/v1/users/viewstock${OrgName}`
  //   )
  //     .then((response) => {
  //       //console.log(response);
  //       setListOfStockRoom(response.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchOrgName();
  // });

  useEffect(() => {
    Axios.get(`http://localhost:3000/api/v1/users/viewstock/${orgName}`)
      .then((response) => {
        console.log("RESPONSE: ", response.data);
        setListOfStockRoom(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [orgName]);

  // console.log(Object.entries(listOfStockRoom));
  // if (error || !Array.isArray(listOfStockRoom)) {
  //   return <p>There was an error loading your data!</p>;
  // }

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
                  {/* <button className="toggle-btn" data-active="inactive">
                    <span className="btnLabel">{el.name}</span>
                  </button> */}
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
