import ImageAndText from '../imageAndText/ImageAndText';
import './skinCareProduct.css';


const SkincareProducts = () => {
  return (
    <div className="SkinCareProduct_cont">

        <div className="SkinCareProduct_cont_sub_cont">
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
            <ImageAndText />
        </div>
        

        <div className="imageAndText_bottomText_cont">
            <span className="imageAndText_bottomText">VIEW ALL SKINCARE</span>
        </div>
    </div>
  )
}

export default SkincareProducts