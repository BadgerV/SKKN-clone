import './product.css';
import image from '../../assets/image11.jpg';
import AddIcon from '@mui/icons-material/Add';
import StarRatingComponent from 'react-star-rating-component';


const Product = () => {
  return (
    <div className='product'>
        <div className="product_pic_part">
            <img src={image} alt="" className="product_img" />
        </div>

        <div className="product_middle_part">
            <div className="product_info_cont">
                <span className="product_name">CLEANSER</span>
                <span className="product_rating"><StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={3}
          starColor={`#000`} 
        emptyStarColor={`#ac9f9f`}
        /></span>
                <span className="product_volume">4.2 OZ / 125 ML</span>
                <span className="product_price">$43</span>
            </div>

            <div className="product_singleOrRefill">
            <span className="product_single">SINGLE</span>
            <span className="product_refill">REFILL</span>
        </div>
        </div>

        <div className="peoduct_right_part">
            <span className="product_add_to_cart">ADD TO CART </span>
            <span className="product_icon1"><AddIcon /></span>
        </div>
    </div>
  )
}

export default Product