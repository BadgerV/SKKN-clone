import './header.css';
import { useState } from 'react';
import Logo from '../logo/Logo';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SkincareProducts from '../skincareProducts/SkincareProducts';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='Header'>
      <div className="header_upper">
        <div className="middle_part">
          <div className="the_logo">
            <Logo/>
          </div>
        </div>
        <div className="right_part">
          <SearchIcon sx={{ fontSize: 35 }} className = "icon"/>
          <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} className = "icon"/>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 35 }} className = "icon"/>
        </div>
      </div>
      <div className="header_lower">
          <span className="header_link_item" onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)} >SKINCARE</span> 
          <span className="header_link_item">THE COMPLETE COLLECTION</span>
          <span className="header_link_item">BUNDLES</span>
          <span className="header_link_item">REFILLS</span>
          <span className="header_link_item">HOME ACCESORIES</span>
          <span className="header_link_item">SUBCRIPTIONS</span>
          <span className="header_link_item">DIGITAL GIFT CARD</span>
      </div>


      {isVisible && (
        <div className="hoverMe" onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        <SkincareProducts />
        </div>
      )}

      
      

      

      <div className="mobilePart">
        <div className="emptyspace">
          <PersonOutlineOutlinedIcon sx={{ fontSize: 27 }} />
        </div>

        <div className="logo_mobile">
          <Logo  />
        </div>

        <div className="mobile_rightPart">
          <SearchIcon sx={{ fontSize: 27 }} />
          <ShoppingBagOutlinedIcon sx={{ fontSize: 27 }} />
      </div>
      </div> 
    </div>
  )
}

export default Header