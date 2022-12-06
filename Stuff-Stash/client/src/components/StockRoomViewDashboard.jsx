import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Assetcard from "../components/assetCard";
import React from "react";
import Axios from "axios";

const orgName = ReactSession.get("selectedOrg");

const StockRoomViewDashboard = ({ orgName }) => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  const [org, setOrg] = useState("");
  const [listOfAssets, setListOfAssets] = useState([]);
  const [error, setError] = useState(null);
  let history = useHistory();
  const userid = ReactSession.get("username");

  var stockroomName = ReactSession.get("selectedStockroom");

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    // console.log(orgName);
    Axios.get(`http://localhost:3000/api/v1/users/viewstock/${orgName}`)
      .then((response) => {
        setListOfStockRoom(response.data);
        setError(null);
      })
      .catch((err) => {
        setListOfStockRoom("");
        setError(err.response.data.msg);
      });
  }, [orgName]);

  const viewStuff = (event) => {
    setOrg(orgName);

    //hide previously displayed create asset button
    if (
      ReactSession.get("selectedStockroom") == null ||
      document.getElementsByClassName("createButton") != null
    ) {
      var buttons = document.getElementsByClassName("createButton");
      var buttonDelete = document.getElementsByClassName("deleteButton");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].hidden = true;
        buttonDelete[i].hidden = true;
      }
      document.getElementsByClassName("createButton").hidden = true;
      document.getElementsByClassName("deleteButton").hidden = true;
    }

    //This will set the stockroom session variable to the stockroom that the user just clicked on
    ReactSession.set("selectedStockroom", event.currentTarget.id);
    stockroomName = ReactSession.get("selectedStockroom");
    console.log("Selected Stockroom is currently " + stockroomName);

    //display the create asset button for the correct stockroom
    document.getElementById(stockroomName + "create").hidden = false;
    document.getElementById("delete" + stockroomName).hidden = false;

    // This will get all the assets under whatever stockroom the user just clicked on
    Axios.get(
      `http://localhost:3000/api/v1/users/viewAssets/${orgName}/${stockroomName}`
    )
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
  const deleteStockroom = async (event) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/deleteStockroom",
        {
          method: "POST",
          body: JSON.stringify({
            org,
            stockroomName,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));
    } catch (err) {
    } finally {
      window.location.reload();
    }
  };

  const handleClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/addAsset", {
        method: "POST",
        body: JSON.stringify({
          stockroomName: stockroomName,
          asset: {
            identifier: "identifier",
            category: "category",
            isAvailable: "true",
            condition: "mint",
            serialCode: "Undefined",
            warranty: "Undefined",
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));
    } catch (err) {
    } finally {
      window.location.reload();
    }
  };

  return (
    <React.Fragment>
      {error && <div>{error}</div>}
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div>
                  <div
                    className="container-fluid buttonItem shadowbtn"
                    key={name[1]}
                  >
                    <button
                      className="toggle-btn"
                      data-active="inactive"
                      id={name[1]}
                      onClick={viewStuff}
                    >
                      <span className="btnLabel">{name[1]}</span>
                    </button>
                  </div>
                  <button
                    class="createButton"
                    id={name[1] + "create"}
                    onClick={handleClick}
                    type="hidden"
                    hidden={true}
                  >
                    Create Asset
                  </button>

                  <button
                    id={"delete" + name[1]}
                    class="deleteButton"
                    onClick={deleteStockroom}
                    type="hidden"
                    hidden={true}
                  >
                    Delete Stockroom
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
            <>
              {listOfAssets[0].assets.length === 0 && (
                <h4>{stockroomName} currently has no assets to be viewed</h4>
              )}
              {Object.entries(value.assets).map((name, key) => {
                return (
                  <div>
                    {/* {console.log(name[1])} */}
                    <Assetcard
                      name={name[1].identifier}
                      avail={name[1].isAvailable}
                      cond={name[1].condition}
                      date={name[1].warranty}
                      serialCode={name[1].serialCode}
                      category={name[1].category}
                    />
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default StockRoomViewDashboard;
