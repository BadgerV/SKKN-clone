import './buying.css';
import image3 from '../../assets/image3.jpg';
import StarRatingComponent from 'react-star-rating-component';


const Buying = (props) => {
    console.log(props.props.imageLink);
    const realName = props.props.name.toUpperCase();
    const reaelRating = +props.props.rating;
  return (
    <div className="buying_container">
        <div className='buying'>
        <div className="buying_img_div">
            <img src={props.props.imageLink} alt="" className='buying_img' />
        </div>

        <div className="buying_typeAndPrice">
            <div className="buying_typeAndPrice_left"> 
                <span className="buying_type">{realName}</span>
                <div className="buying_star_cont">
                <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={reaelRating}
          starColor={`#000`} 
        emptyStarColor={`#ac9f9f`}
        />
                </div>
            </div>

            <div className="buying_typeAndPrice_right">
                <span className="buying_price">${props.props.price}</span>
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