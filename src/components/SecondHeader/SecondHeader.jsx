import './secondHeader.css'
import Search from '../../assets/SearchIcon.png';
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
            <div className="SecondHeaderInputCont">
                <input type= "text" placeholder='Search' className='SeconheaderSearch'/>
                <img src={Search} alt="Search " className='SearchIcon_SecondHeader' />
            </div>
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