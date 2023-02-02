import './mainSection.css';
import image from '../../assets/image2.jpg';

const MainSection = () => {
  return (
    <div className='mainSection'>
        <div className="mainSection_left">
            <div className="mainSection_imgCont">
                <img src={image} alt="" className="mainCont_img" />
            </div>
        </div> 
        <div className="mainSection_right">
            <span className="mainSection_title">A NEW ERA OF SKINCARE</span>
            <span className="mainSection_text">Introducing an innovative line of uncompromising skincare developed by Kim Kardashian. Through a visionary nine-product ritual, SKKN BY KIM delivers nourishment, renewal, and an indulgent at-home experience.</span>
            <button className="mainSection_readMore">READ MORE</button>
        </div>
    </div>
  )
}

export default MainSection