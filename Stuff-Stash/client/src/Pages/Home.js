//data link
//https://api-dot-techstack-demo-deployment.ue.r.appspot.com

//frontend link
//https://techstack-demo-deployment.ue.r.appspot.com

import '../App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () =>{

  const [listOfUsers, setListOfUsers] = useState([]);
  const [recentUser, setRecentUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationID, setOrganizationID] = useState("");

  const fetchUser = async () => {
    // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users');
    const res = await fetch('http://localhost:3000/api/v1/users');
    const data = await res.json();
    //console.log("users/ - DATA ", data);
    //setRecentUser(data.data);
    setRecentUser(data);
  };
    
  
  const fetchUsers = async () => {
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers');
    // const res = await fetch('http://localhost:3000/api/v1/users/getUsers');
    const data = await res.json();
    //console.log("users/getUsers - DATA:", data);
    //setListOfUsers(data.data);
    setListOfUsers(data);
  };
    
  const createUser = async (e) => {
    e.preventDefault();
    // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users', {
    const res = await fetch('http://localhost:3000/api/v1/users/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        organizationID
      })
    })
    
    const data = res.json();
    console.log('data -- ', data);
    if (data.success) {
      await fetchUsers()
    }
    setUsername('');
    setPassword('');
    setOrganizationID('');
    //Axios.post("/createUser", {
    //  name: name,
    //}).then((response) => {
    //  setListOfUsers([...listOfUsers, 
    //    {
    //      name: name, 
    //    },
    //  ]);
    //});
  };

  useEffect(() => { // Gets the most recent user from the database using the server
    fetchUser()
  })

  useEffect(() => { // Gets every single user registered from the database using the server
    fetchUsers()
  }, [])

return (

    <div className="App">
      <div className="usersDisplay">
        
        {recentUser.map((user) => {
          return (
            <div>
              <h1>Hello {user.username}</h1>
            </div>
          );  
        })}
      </div>

      <div>
        <input id='username' type="text" placeholder="Name..." onChange={(event) => {setUsername(event.target.value);}} />
        <input id='password' type="text" placeholder="Password..." onChange={(event) => {setPassword(event.target.value);}} />
        <input id='organizationID' type="text" placeholder="Organization ID..." onChange={(event) => {setOrganizationID(event.target.value);}} />
        <button onClick={createUser}> Greet User </button>
      </div>
    </div>
  
  );
}

export default Home;