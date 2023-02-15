import './App.css';
import { useEffect } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { authHeader } from './auth-header';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const {user} = useContext(AuthContext);

  
  
    const userExists = JSON.parse(localStorage.getItem("user"));
    console.log(userExists)
  


  
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {user || userExists ? <Home /> : <Login />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={user || userExists ? <Home /> : <SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
