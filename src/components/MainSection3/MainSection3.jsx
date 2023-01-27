import './mainSection3.css';
import image from '../../assets/image10.jpg'

const MainSection3 = () => {
  return (
    <div className='mainSection3'>
        <div className="mainSection3_left">
            <span className="mainSection3_title">RADIANCE, BOTTLED</span>
            <span className="mainSection3_text">With a focus on quality and efficacy, SKKN BY KIM's science-backed, clean formulas deliver targeted rejuvenation. Crafted for conscious consumers, each product is cruelty-free, vegan, and formulated without gluten, sulfates, BHT, and PEGs.</span>
            <button className="mainSection3_readMore">SHOP SKINCARE</button>
        </div>

        <div className="mainSection3_right">
            <div className="mainSection3_imgCont">
                <img src={image} alt="" className="mainCont3_img" />
            </div>
        </div>
    </div>
  )
}

export default MainSection3