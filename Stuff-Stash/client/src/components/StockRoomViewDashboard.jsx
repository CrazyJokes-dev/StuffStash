import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Assetcard from "../components/assetCard";
import React from "react";
import Axios from "axios";

const StockRoomViewDashboard = ({orgName}) => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  const [listOfAssets, setListOfAssets] = useState([]);
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState(null);
  
  let history = useHistory();
  const userid = ReactSession.get("username");

  //const orgName = ReactSession.get("selectedOrg");

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:3000/api/v1/users/viewstock/${orgName}`
    )
      .then((response) => {
        setListOfStockRoom(response.data);
        setError(null);
        
      })
      .catch((err)=>{
           setListOfStockRoom("");
           setError(err.response.data.msg);
             
      })
  }, [orgName]);
  
 
  return (
   
    <React.Fragment>
      <br />
      {error && <div>{error}</div>}
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div className="container-fluid buttonItem shadowbtn" key={name[1]}>
                  <button id={name[1]} className="toggle-btn" onClick={viewAssets}>
                    <span className="btnLabel">{name[1]}</span>
                  </button>
                </div>
              );
            })}
          </li>
        );
      })}
        
    </React.Fragment>
      
  );
};
export default StockRoomViewDashboard;
