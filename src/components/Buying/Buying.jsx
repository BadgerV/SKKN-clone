import './buying.css';
import image3 from '../../assets/image3.jpg';
import StarRatingComponent from 'react-star-rating-component';


const Buying = () => {
  return (
    <div className="buying_container">
        <div className='buying'>
        <div className="buying_img_div">
            <img src={image3} alt="" className='buying_img' />
        </div>

        <div className="buying_typeAndPrice">
            <div className="buying_typeAndPrice_left"> 
                <span className="buying_type">CLEANSER</span>
                <div className="buying_star_cont">
                <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={3}
          starColor={`#000`} 
        emptyStarColor={`#ac9f9f`}
        />
                </div>
            </div>

            <div className="buying_typeAndPrice_right">
                <span className="buying_price">$43</span>
            </div>
        </div>

        <div className="singleOrRefill">
            <span className="buying_single">SINGLE</span>
            <span className="buying_refill">REFILL</span>
        </div>

        <button className="buying_add_to_cart">
            ADD TO BAG
        </button>
    </div>

   
    </div>
  )
}

export default Buying