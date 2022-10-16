import { useState, useEffect } from "react";
import { ReactSession } from 'react-client-session';
import Axios from "axios";


function Helpme () {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [recentUser, setRecentUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [organizationID, setOrganizationID] = useState("");

    const usernameC = ReactSession.get("username");
    const orgIDC = ReactSession.get("orgID");

    useEffect(() => {
        Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users").then((response) => {
          setRecentUser(response.data);
        });
      });
    
    useEffect(() => {
      //Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers").then((response) => {
      Axios.get("http://localhost:3000/api/v1/users/getUsers").then((response) => {
      setListOfUsers(response.data);
      });
    }, []);


    return (
        <div className="App">
          <div className="usersDisplay">
            {listOfUsers.map((user) => {
              return (
                <div>
                    <ul>
                        <li><h2>username: {usernameC}</h2></li>
                        <li><h2>password: {user.password}</h2></li>
                        <li><h2>orgID: {orgIDC}</h2></li>
                    </ul>
                </div>
              );  
            }).reverse()}
          </div>
        </div>
     
      );
}
export default Helpme;