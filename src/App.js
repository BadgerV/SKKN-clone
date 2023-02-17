import './App.css';
import { useEffect } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import SellerPage from './pages/sellerPage/SellerPage';
import { useSelector } from 'react-redux';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = useSelector((store) => store.user.user);


  
  
    const userExists = JSON.parse(localStorage.getItem("user"));


  
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path = "/" element = {user || userExists ? <Home /> : <Login />} />
        <Route exact path="/login" element={user || userExists ? <Home /> : <Login />} />
        <Route exact path="/signup" element={user || userExists ? <Home /> : <SignUp />}/> */}

        <Route exact path = "/" element = {<SellerPage />} />
      </Routes>
    </div>
  );
}

export default App;
