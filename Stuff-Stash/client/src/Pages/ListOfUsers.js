import { useState, useEffect } from "react";
import Axios from "axios";


function Helpme () {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [recentUser, setRecentUser] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users").then((response) => {
          setRecentUser(response.data);
        });
      });
    
    useEffect(() => {
      Axios.get("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers").then((response) => {
      setListOfUsers(response.data);
      });
    }, []);

    const createUser = () => {
      Axios.post("https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createUser", {
        name: name,
      }).then((response) => {
        setListOfUsers([...listOfUsers, 
          {
            name: name, 
          },
        ]);
      });
    };


    return (
        <div className="App">
          <div className="usersDisplay">
            {listOfUsers.map((user) => {
              return (
                <div>
                    <ul>
                        <li><h2>{user.name}</h2></li>
                    </ul>
                </div>
              );  
            }).reverse()}
          </div>
        </div>
     
      );
}
export default Helpme;