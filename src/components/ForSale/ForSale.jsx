import './forSale.css';
import image1 from '../../assets/image12.jpg';
import image2 from '../../assets/image13.jpg';


const ForSale = () => {
  return (
    <div className='ForSale'>
        <div className="forSale_left_part">
            <div className="forsale_image_cont">
                <img src={image1} alt="" className="forsale_img" />
            </div>
            <span className="forsale_title">NATURAL ACCENTS</span>
            <span className="forsale_text">Transform your home into a sanctuary with sculptural decor</span>
            <button className="forsale_button">HOME ACCESSORIES</button>
        </div>
        <div className="forSale_right_part">
        <div className="forsale_image_cont">
                <img src={image2} alt="" className="forsale_img" />
            </div>
            <span className="forsale_title">REDUCE, REUSE, REFILL</span>
            <span className="forsale_text">Eco-friendly Refills extend the life cycle of our products</span>

            <button className="forsale_button">REFILLS</button>
        </div>
    </div>
  )
}

export default ForSale