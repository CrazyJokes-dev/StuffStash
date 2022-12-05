import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React from "react";
import Axios from "axios";

const ViewMembers = ({orgName}) => {
  const [listOfMembers, setListOfMembers] = useState([]);
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");

 // const orgName = ReactSession.get("selectedOrg");

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:3000/api/v1/users/viewmembers/${orgName}`
    )
      .then((response) => {
        setListOfMembers(response.data);
      })
      .catch((err) => {
        setListOfMembers("");
        setError(err);
      });
  }, [orgName]);

  return (
    <React.Fragment>
      {Object.entries(listOfMembers).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent white" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div
                  key={name[1]}
                >

                    <span>{name[1]}</span>
                </div>
              );
            })}
          </li>
        );
      })}
    </React.Fragment>
  );
};
export default ViewMembers;
