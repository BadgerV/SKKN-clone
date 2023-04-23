// import Footer from '../../components/Footer/Footer';

// import { registerCall } from '../../apiCalls';

// import { useRef, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { CircularProgress } from "@material-ui/core";
// import Header from '../../components/Header/Header';
// import './signUp.css';

// const SignUp = () => {
//     const firstName = useRef();
//     const lastName = useRef();
//     const email = useRef();
//     const password = useRef();
//     const confirmPassword = useRef();

//     const { user, isFetching, error, dispatch } = useContext(AuthContext);
//     const handleClick = (e) => {
//     e.preventDefault();
//     registerCall(
//       { firstName : firstName.current.value,
//         lastName : lastName.current.value,
//         email: email.current.value,
//         password: password.current.value,
//         confirmPassword: confirmPassword.current.value,
//     },
//       dispatch
//     );
//   };

//   console.log(user);
//   return (
//     <div className="signUp_page">
//         <Header />

//         <div className="signUp_main">
//             <span className="signUp_createAcc">CREATE ACCOUNT</span>
//             <input type="text" ref={firstName} placeholder='First Name' className="signUpinput signUpFirstName" />
//             <input type="text" ref={lastName} placeholder='Last Name'className="signUpinput signUpLastName" />
//             <input type="email" ref={email} placeholder='Email Address'className="signUpinput signUpEmail" />
//             <input type="password" ref={password} placeholder='Password' className="signUpinput signUpPassword" />
//             <span className="signUp_attachToPassword">Must be at least 6 characters long</span>
//             <input type="password" ref={confirmPassword}placeholder='Confirm Password' className="signUpinput signUpPassword" />
//             <span className="signUp_attachToPassword">Must be at least 6 characters long</span>

//             <form className='signUp_form'>
//                 <span className="signUp_label1">
//                     <input type="checkbox" id="cb1" value="Hello this is me" />
//                     <label for="cb1">I would like to recieve emails on updates of products, offers, promotions, and other marking information from SKKN.
//                         I understand that i can opt oiut of these communications, free of charge, at any time by sending an email to [customerServices@SKKNByKIM.com] with the sbject line of unsubscibe
//                     </label>
//                 </span>

//                 <span className="signUp_label1">
//                     <input type="checkbox" id="cb2" value="Hello this is me" />
//                     <label for="cb2">Please agree of our Terms and Privacy Policy to create an account</label>
//                 </span>
//             </form>

//             <button className="signUp_register" onClick={handleClick}>{isFetching ? (
//                 <CircularProgress color="inherit" size="20px" />
//               ) : (
//                 "REGISTER"
//               )}</button>

//             <div className="sigup_textCOnt">
//                 <span className="signUp_alreadyHave">Already have an account? LOGIN</span>
//             </div>
//             <div className="loginPage_continue_cont">
//                 <span className="loginPage_continue">OR CONTINUE WITH</span>
//             </div>

//             <div className="SignUpPage_twoButtonCont">
//                 <button className="loginPage_button2">FACEBOOK</button>
//                 <button className="loginPage_button3">GOOGLE</button>
//             </div>

//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from "react";
import "../login/login.css";

import { Link } from "react-router-dom";
import HeaderNew from "../../components/HeaderNew/HeaderNew";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

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
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Name"
                className="login_input"
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="login_input"
              />
              <label htmlFor="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="login_input"
              />
              <button type="submit " className="login_button">
                Log In
              </button>
            </form>
            <Link to="/login">
              <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
              >
                Already have an account? Login here.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
