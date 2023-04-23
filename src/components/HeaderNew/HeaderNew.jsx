import "./headerNew.css";
import { Link } from "react-router-dom";

const HeaderNew = () => {
  return (
    <div className="headerNew_container">
      <div className="newHeader_logoContainer">
        <img src="./assets/logo.png" alt="" className="newHeaderLogImg" />
        <span className="newHeader_logoText">SF Shopping Website</span>
      </div>

      <div className="newHeaderButtonContainer">
        <Link to="/login">
          <button
            className="newSignInButton buttonNew"
            onClick={() => {
              console.log("This is working");
            }}
          >
            <span>Sign In</span>
          </button>
        </Link>

        <Link to="/signup">
          <button className="newSignUpButton buttonNew">
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNew;
