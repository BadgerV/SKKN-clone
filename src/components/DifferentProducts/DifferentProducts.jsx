import './differentProducts.css';
import image1 from '../../assets/image14.jpg'
import image2 from '../../assets/image15.jpg'
import image3 from '../../assets/image16.jpg'
import image4 from '../../assets/image17.jpg'

const DifferentProducts = () => {
  return (
    <div className='differentProducts'>
        <div className="differentProductContainer">
            <div className="differentProductContainer_img_cont">
                <img src={image1} alt="" className="differentProduct_img" />
            </div>

            <span className="differentProduct_name">EXFOLIATOR</span>
        </div>
        <div className="differentProductContainer">
        <div className="differentProductContainer_img_cont">
                <img src={image2} alt="" className="differentProduct_img" />
            </div>

            <span className="differentProduct_name">OIL DROPS</span>
        </div>
        <div className="differentProductContainer">
        <div className="differentProductContainer_img_cont">
                <img src={image3} alt="" className="differentProduct_img" />
            </div>

            <span className="differentProduct_name">CLEANSER</span>
        </div>
        <div className="differentProductContainer">
        <div className="differentProductContainer_img_cont">
                <img src={image4} alt="" className="differentProduct_img" />
            </div>

            <span className="differentProduct_name">EYE CREAM</span>
        </div>
    </div>
  )
}

export default DifferentProducts