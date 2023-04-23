// import './login.css';
// import { loginCall } from '../../apiCalls';

// import { useRef, useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { CircularProgress } from "@material-ui/core";

// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';

// const Login = () => {

//   const {isLoading} = useSelector((store) => store.user);

//   const dispatch = useDispatch();
//   const email = useRef();
//   const password = useRef();

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );
//   };

//   return (
//     <div className='loginPage'>
//         <Header />

//         <div className="loginPage_main">
//             <span className="login_text">LOGIN</span>
//             <span className="loginPage_sub_text">If you already have a SKKN BY KIM customer account, please enter your login information.</span>

//             <input type="text" placeholder='Email'
//               ref={email}
//                className="loginPage_input loginPage_email" />
//             <input type="password" placeholder='Password'
//               ref={password} className="loginPage_input loginPage_password" />

//             <div className="loginPage_forgotpassword_cont">
//                 <span className="loginPage_forgotPassword">FORGOT YOUR PASSWORD?</span>
//             </div>

//             <span className="loginPage_agreeingTerms">By logging in, you agree to our Terms, and Privacy Policy</span>

//             <button className="loginPage_button loginPage_button1" onClick={handleClick}>{isLoading ? (
//                 <CircularProgress color="white" size="20px" />
//               ) : (
//                 "Create new account"
//               )}</button>

//             <div className="loginPage_continue_cont">
//                 <span className="loginPage_continue">OR CONTINUE WITH</span>
//             </div>

//             <div className="loginPage_twoButtonCont">
//                 <button className="loginPage_button2">FACEBOOK</button>
//                 <button className="loginPage_button3">GOOGLE</button>
//             </div>

//             <span className="loginPage_createAccount_text">CREATE AN ACCOUNT</span>
//             <span className="loginPage_createAccount_sub_text">Create your personal account to join SKKN BY KIM.</span>

//             <button className="loginPage_button loginPage_button4">CREATE AN ACCOUNT</button>
//         </div>

//         <Footer />
//     </div>
//   )
// }

// export default Login
import "./login.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNew from "../../components/HeaderNew/HeaderNew";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="login">
        <div className="innner-form">
          <div className="new-header">
            <HeaderNew />
          </div>

          <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="login_input"
                placeholder="Email"
                id="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="login_input"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              <button className="login_button" type="submit">
                Log In
              </button>
            </form>
            <Link to="/signup">
              <button
                className="link-btn"
                onClick={() => props.onFormSwitch("register")}
              >
                <span>Don't have an account? Register here.</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
