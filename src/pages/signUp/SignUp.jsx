import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './signUp.css';


const SignUp = () => {
  return (
    <div className="signUp_page">
        <Header />

        <div className="signUp_main">
            <span className="signUp_createAcc">CREATE ACCOUNT</span>
            <input type="text" placeholder='First Name' className="signUpinput signUpFirstName" />
            <input type="text" placeholder='Last Name'className="signUpinput signUpLastName" />
            <input type="text" placeholder='Email Address'className="signUpinput signUpEmail" />
            <input type="password" placeholder='Password' className="signUpinput signUpPassword" />
            <span className="signUp_attachToPassword">Must be at least 6 characters long</span>
            <input type="password" placeholder='Confirm Password' className="signUpinput signUpPassword" />
            <span className="signUp_attachToPassword">Must be at least 6 characters long</span>

            <form className='signUp_form'>
                <span className="signUp_label1">
                    <input type="checkbox" id="cb1" value="Hello this is me" />
                    <label for="cb1">I would like to recieve emails on updates of products, offers, promotions, and other marking information from SKKN.
                        I understand that i can opt oiut of these communications, free of charge, at any time by sending an email to [customerServices@SKKNByKIM.com] with the sbject line of unsubscibe
                    </label>
                </span>
                

                <span className="signUp_label1">
                    <input type="checkbox" id="cb2" value="Hello this is me" />
                    <label for="cb2">Please agree of our Terms and Privacy Policy to create an account</label>
                </span>
            </form>

            <button className="signUp_register">REGISTER</button>

            <div className="sigup_textCOnt">
                <span className="signUp_alreadyHave">Already have an account? LOGIN</span>
            </div>
            <div className="loginPage_continue_cont">
                <span className="loginPage_continue">OR CONTINUE WITH</span>    
            </div>

            <div className="SignUpPage_twoButtonCont">
                <button className="loginPage_button2">FACEBOOK</button>
                <button className="loginPage_button3">GOOGLE</button>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default SignUp