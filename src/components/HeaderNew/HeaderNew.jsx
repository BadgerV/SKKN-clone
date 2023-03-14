import './headerNew.css';

const HeaderNew = () => {
    return( 
        <div className = "headerNew_container">
            <div className="newHeader_logoContainer">
                <img src="./assets/logo.png" alt="" className="newHeaderLogImg"/>
                <span className="newHeader_logoText">SF Shopping Website</span>
            </div>

            <div className="newHeaderButtonContainer">
                <button className="newSignInButton buttonNew" onClick = {() => {
                    console.log('This is working')
                }}>Sign In</button>
                <button className="newSignUpButton buttonNew">Sign Up</button>
            </div>
        </div>
    )
}

export default HeaderNew