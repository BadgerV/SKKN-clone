//imoort css page
import "./sellerPage.css";


//imporrting useful icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

//importing uswful components from components folder
import MyProducts from "../../components/MyProducts/MyProducts";
import EditProducts from "../../components/EditProducts/EditProducts";
import PostNewProducts from "../../components/PostNewProducts/PostNewProducts";

//importing useful modules from react
import { useState } from "react";

const SellerPage = () => {
    const [component, setComponent] = useState(0);

    //create function that detects click to change component
    const handleClick = (num) => {
        setComponent(num)
    }

    
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
                <div className="sellerPage_myProducts_header" style={{backgroundColor : "#efcd87"}} onClick = {() => handleClick(1)}>MY PRODUCTS</div>
                <div className="sellerPage_postProduct_header" onClick = {() => handleClick(2)}>POST NEW PRODUCT</div>
                <div className="sellerPage_editProduct_header" onClick = {() => handleClick(3)}>EDIT / DELETE PRODUCT</div>
            </div>

            <div className="sellerPage_container">
            {
                component == 1 ? (
                    <MyProducts />
                ) : component == 2 ? (
                    <PostNewProducts />
                ) : (
                    <EditProducts />
                    
                )
            }
            </div>
        </div>
    </div>
  )
}

export default SellerPage