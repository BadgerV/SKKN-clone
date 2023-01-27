import './header.css';
import Logo from '../logo/Logo';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = () => {
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
        <ul className="header_links">
          <li className="header_link_item">SKINCARE</li>
          <li className="header_link_item">THE COMPLETE COLLECTION</li>
          <li className="header_link_item">BUNDLES</li>
          <li className="header_link_item">REFILLS</li>
          <li className="header_link_item">HOME ACCESORIES</li>
          <li className="header_link_item">SUBCRIPTIONS</li>
          <li className="header_link_item">DIGITAL GIFT CARD</li>
        </ul>
      </div>
    </div>
  )
}

export default Header