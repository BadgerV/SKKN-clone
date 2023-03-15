import './App.css';
import { useEffect } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import SellerPage from './pages/sellerPage/SellerPage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Routes,
  Route,
} from "react-router-dom";
import GeneralPage from './pages/GeneralPage/GeneralPage';

function App() {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.user);

  const userExists = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   if(userExists.accType === "seller") {
  //     navigate("/seller-page")
  //   }
  // }, [])
  
  return (
    <div className="App">
      {/* <Routes>
         <Route exact path = "/" element = {user || userExists ? <Home /> : <Login />} />
        <Route exact path="/login" element={user || userExists ? <Home /> : <Login />} />
        <Route exact path="/signup" element={user || userExists ? <Home /> : <SignUp />}/> 

        <Route exact path = "/seller-page" element = {<SellerPage />} />
      </Routes> */}
      <GeneralPage />
    </div>
  );
}

export default App;
