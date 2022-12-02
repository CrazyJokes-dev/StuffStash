import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Assetcard from "../components/assetCard";
import React from "react";
import Axios from "axios";

const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  const [listOfAssets, setListOfAssets] = useState([]);
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");

  const orgName = ReactSession.get("selectedOrg");
  var stockroomName = ReactSession.get("selectedStockroom");

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
      })
      .catch((err) => {
        setError(err);
      });
  }, [orgName]);

  const viewAssets = (event) => {
    //This will set the stockroom session variable to the stockroom that the user just clicked on
    ReactSession.set("selectedStockroom", event.currentTarget.id);
    stockroomName = ReactSession.get("selectedStockroom");
    console.log("Selected Stockroom is currently " + stockroomName);

    // This will get all the assets under whatever stockroom the user just clicked on
    Axios.get(`http://localhost:3000/api/v1/users/viewAssets/${orgName}/${stockroomName}`)
      .then((response) => {
        setListOfAssets(response.data);
        // This may look delayed by one click but don't worry it is receiving the correct assets
        //console.log(listOfAssets);  
      })
      .catch((err) => {
        setError(err);
      });

      document.getElementById("AssetList").removeAttribute("hidden");
  };

  return (
    <React.Fragment>
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
      <div id="AssetList" hidden="hidden">
      {Object.entries(listOfAssets).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            { listOfAssets[0].assets.length === 0 && <h4>{stockroomName} currently has no assets to be viewed</h4>}
            {Object.entries(value.assets).map((name, key) => {
              return (
                <div>
                  {console.log(name[1])}
                  <Assetcard name={name[1].identifier} avail={name[1].isAvailable} cond={name[1].condition} date={name[1].warranty}/>
                </div>
              )
            })}
          </li>
        );
      })}
      </div>
    </React.Fragment>
  );
};
export default StockRoomViewDashboard;
