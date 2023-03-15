import './secondHeader.css'
import Menu from '../../assets/Menu.png';
import Cart from '../../assets/CartIcon.png';

const SecondHeader = () => {
  return (
    <div className='SecondHeader'> 
        <div className="SeconHeaderLeft">
            <div className="SecondHeader_logoContainer">
                <img src="./assets/logo.png" alt="" className="secondHeaderLogoImg"/>
                <span className="secondHeader_logoText">SF Shopping Website</span>
            </div>
        </div>

        <div className="SecondHeaderRight">
            <input type= "text" placeholder='Search' className='SeconheaderSearch'/>
            <button className="secondHeaderSignIn">Sign In</button>

            <div className="secondHeader_cartCont">
                <img src={Cart} alt="cart" className='seconHeader_cart'/>
                <div className="cartNumber">55</div>
            </div>
        </div>
    </div>
  )
}

export default SecondHeader