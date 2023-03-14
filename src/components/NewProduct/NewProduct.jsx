import './newProduct.css';
import image from '../../assets/image2.jpg';

const NewProduct = ({name, price, description}) => {
  return (
    <div className="NewProduct">
        <div className="NewProductImageContainer">
            <img src={image} alt="" className='NewProductImage' />
        </div>

        <div className="NewPoductPart">
            <div className="NewProductNameAndPrice">
                <span className="newPrdocuctName">{name}</span>
                <span className="newPrdocuctPrice">N{price}</span>
            </div>

            <div className="newProductDescription">{description}</div>

            <button className="newProductButton">ADD TO CART</button>
        </div>  
    </div>
  )
}

export default NewProduct