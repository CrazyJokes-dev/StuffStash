import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
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

  //function useViewAssets(stockroom) {
  const useViewAssets = (event) => {
    const [Assets, setAssets] = useState([]);

    ReactSession.set("selectedStockroom", event.currentTarget.id);
    stockroomName = ReactSession.get("selectedStockroom");
    console.log("Selected Stockroom is currently " + event.currentTarget.id);

    useEffect(() => {
      Axios.get(
        `http://localhost:3000/api/v1/users/viewAssets/${orgName}/${stockroomName}`
      )
        .then((response) => {
          setAssets(response.data);
          console.log(Assets);
        })
        .catch((err) => {
          setError(err);
        });
    }, [stockroomName]);
    
    return Assets;
  }

  const SetStockroomSession = (event) => {
    const Assets = useViewAssets(event);
    console.log("Selected Stockroom is currently " + event.currentTarget.id);
    ReactSession.set("selectedStockroom", event.currentTarget.id);
    stockroomName = ReactSession.get("selectedStockroom");
    
  }

  return (
    <React.Fragment>
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div className="container-fluid buttonItem shadowbtn" key={name[1]}>
                  <button id={name[1]} className="toggle-btn" onClick={useViewAssets} data-active="inactive">
                    <span className="btnLabel">{name[1]}</span>
                  </button>
                </div>
              );
            })}
          </li>
        );
      })}
      {Object.entries(listOfAssets).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
              {/* {console.log(value.assets[0].identifier)} */}
              <div>
                {/* <h4>{value.assets[0]}</h4> */}
              </div>
          </li>
        );
      })}
    </React.Fragment>
  );
};
export default StockRoomViewDashboard;
