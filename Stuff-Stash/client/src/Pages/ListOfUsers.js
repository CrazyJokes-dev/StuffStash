/**
 * 
 * 
 *  DELETE THIS FILE???
 * 
 *    - Matt
 */

import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import Axios from "axios";

function Helpme() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [recentUser, setRecentUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationID, setOrganizationID] = useState("");

  const usernameC = ReactSession.get("username");
  const orgIDC = ReactSession.get("orgID");

  useEffect(() => {
    Axios.get(
      "http://localhost:3000/api/v1/users"
    ).then((response) => {
      setRecentUser(response.data);
    });
  });

  useEffect(() => {
    //Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers").then((response) => {
    Axios.get("http://localhost:3000/api/v1/users/getUsers").then(
      (response) => {
        setListOfUsers(response.data);
      }
    );
  }, []);

  const createUser = () => {
    Axios.post(
      "http://localhost:3000/api/v1/users/createUser",
      {
        username: username,
        password: password,
        organizationID: organizationID,
      }
    ).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          username: username,
          password: password,
          organizationID: organizationID,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers
          .map((user) => {
            return (
              <div>
                <ul>
                  <li>
                    <h2>{user.username}</h2>
                  </li>
                  <li>
                    <h3>{user.password}</h3>
                  </li>
                  <li>
                    <h4>{user.organizationID}</h4>
                  </li>
                </ul>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}
export default Helpme;
