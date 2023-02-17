import './login.css';
import { loginCall } from '../../apiCalls';

import { useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CircularProgress } from "@material-ui/core";



import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Login = () => {

  const {isLoading} = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
   
  return (
    <div className='loginPage'>
        <Header />

        <div className="loginPage_main">
            <span className="login_text">LOGIN</span>
            <span className="loginPage_sub_text">If you already have a SKKN BY KIM customer account, please enter your login information.</span>

            <input type="text" placeholder='Email' 
              ref={email}
               className="loginPage_input loginPage_email" />
            <input type="password" placeholder='Password' 
              ref={password} className="loginPage_input loginPage_password" />

            <div className="loginPage_forgotpassword_cont">
                <span className="loginPage_forgotPassword">FORGOT YOUR PASSWORD?</span>
            </div>

            <span className="loginPage_agreeingTerms">By logging in, you agree to our Terms, and Privacy Policy</span>

            <button className="loginPage_button loginPage_button1" onClick={handleClick}>{isLoading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create new account"
              )}</button>
            

            <div className="loginPage_continue_cont">
                <span className="loginPage_continue">OR CONTINUE WITH</span>    
            </div>

            <div className="loginPage_twoButtonCont">
                <button className="loginPage_button2">FACEBOOK</button>
                <button className="loginPage_button3">GOOGLE</button>
            </div>

            <span className="loginPage_createAccount_text">CREATE AN ACCOUNT</span>
            <span className="loginPage_createAccount_sub_text">Create your personal account to join SKKN BY KIM.</span>

            <button className="loginPage_button loginPage_button4">CREATE AN ACCOUNT</button>
        </div>

        <Footer />
    </div>
  )
}

export default Login