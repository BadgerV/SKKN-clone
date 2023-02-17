import "./sellerPage.css";

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const SellerPage = () => {
  return (
    <div className="sellerPgae">
        <div className="sellerPage_header">
            <div className="sellerPage_header_left">
                <span className="sellerPage_welcomeText">Welcome Faozan</span>
            </div>

            <div className="sellerPage_header_right">
            <SearchIcon sx={{ fontSize: 30 }} className = "icon"/>
            <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} className = "icon"/>
            <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} className = "icon"/>
            </div>
        </div>
        


        <div className="sellerPage_main">
            <div className="sellerPage_main_header">
                <div className="sellerPage_myProducts_header" style={{backgroundColor : "#efcd87"}}>MY PRODUCTS</div>
                <div className="sellerPage_postProduct_header">POST NEW PRODUCT</div>
                <div className="sellerPage_editProduct_header">EDIT / DELETE PRODUCT</div>
            </div>

            <div className="sellerPage_container">

            </div>
        </div>
    </div>
  )
}

export default SellerPage