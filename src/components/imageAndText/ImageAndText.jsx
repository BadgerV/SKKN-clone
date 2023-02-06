import './imageAndText.css';
import image from '../../assets/image18.jpg'

const ImageAndText = () => {
  return (
    <div className='ImageAndText'>
        <div className="ImageAndText_cont">
            <img src={image} alt="" className="ImageAndText_img" />
        </div>

        <span className="ImageAndText_text">CLEANSER</span>
    </div>
  )
}

export default ImageAndText