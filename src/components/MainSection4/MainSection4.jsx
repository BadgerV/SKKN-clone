import './mainSection4.css';
import image from '../../assets/kim_k.jpg';
import Product from '../Product/Product';


const MainSection4 = () => {
    const products = [
        {
            name : "Cleanser",
            stars : "*  *  *  *",
            volume : "4.2 OZ / 125ML",
            price : "$43" 
        },
        {
            name : "Toner",
            stars : "*  *  *  *  *",
            volume : "6 OZ / 180ML",
            price : "$45" 
        },{
            name : "Toner",
            stars : "*  *  *  *  *",
            volume : "6 OZ / 180ML",
            price : "$45" 
        },
    ]
  return (
    <div className='mainSection4'>
        <div className="mainSection4_left">
            <img src={image} alt="" className='mainSection4_img'/>
        </div>
        
        <div className="mainSection4_right">
            <span className="mainSection4_right_title">SHOP THE RITUAL</span>
            <div className="mainSection4_right_main">
                {products.map((product) => {
                    return(
                        <Product />
                    )
                })}
            </div>
            <button className="mainSection4_button">ADD ALL PRODUCTS TO BAG</button>
        </div>
    </div>
  )
}

export default MainSection4