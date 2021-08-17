
import React, {useState} from 'react';
import { AddUsers } from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setUserList((prevUserList) => {
      return [...prevUserList,{name:uName , age:uAge}] 
    })
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users = {userList}/>
        
      

    </div>
  );
}

export default App;
