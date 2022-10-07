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
  const [name, setName] = useState("");

  const fetchUser = async () => {
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users');
    const data = await res.json();
    //console.log("users/ - DATA ", data);
    //setRecentUser(data.data);
    setRecentUser(data);
  };
    
  
  const fetchUsers = async () => {
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/getUsers');
    const data = await res.json();
    //console.log("users/getUsers - DATA:", data);
    //setListOfUsers(data.data);
    setListOfUsers(data);
  };
    
  const createUser = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name
      })
    })
    
    const data = res.json();
    console.log('data -- ', data);
    if (data.success) {
      await fetchUsers()
    }
    setName('');
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

  useEffect(() => {
    fetchUser()
  })

  useEffect(() => {
    fetchUsers()
  }, [])

return (

    <div className="App">
      <div className="usersDisplay">
        
        {recentUser.map((user) => {
          return (
            <div>
              <h1>Hello {user.name}</h1>
            </div>
          );  
        })}
      </div>

      <div>
        <input id='userName' type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value);}} />
        <button onClick={createUser}> Greet User </button>
      </div>
    </div>
  
  );
}

export default Home;