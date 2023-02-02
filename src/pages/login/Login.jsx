import './login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Login = () => {
  return (
    <div className='loginPage'>
        <Header />

        <div className="loginPage_main">
            <span className="login_text">LOGIN</span>
            <span className="loginPage_sub_text">If you already have a SKKN BY KIM customer account, please enter your login information.</span>

            <input type="text" placeholder='Email' className="loginPage_input loginPage_email" />
            <input type="password" placeholder='Password' className="loginPage_input loginPage_password" />

            <div className="loginPage_forgotpassword_cont">
                <span className="loginPage_forgotPassword">FORGOT YOUR PASSWORD?</span>
            </div>

            <span className="loginPage_agreeingTerms">By logging in, you agree to our Terms, and Privacy Policy</span>

            <button className="loginPage_button loginPage_button1">LOG IN</button>
            

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