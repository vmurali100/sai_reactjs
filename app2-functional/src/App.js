import logo from './logo.svg';
import './App.css';
import  User  from './Components/User';
import { useState } from 'react';
import Parent from './Components/Parent';

function App() {
  const [userInfo,setUserInfo] = useState({
    fname:"Murali",
    lname:"Krishna",
    email:"murali@gmail.com"
  })

  const [users,setUsers]=useState(["Ram","Ravi","Sam","Sundar"])
  return (
    <div className="App">
    {/* <User msg={userInfo} users={users}/> */}
    <Parent/>
    </div>
  );
}

export default App;
