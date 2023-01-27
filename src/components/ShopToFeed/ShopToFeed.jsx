import './shoptoFeed.css';

import image from '../../assets/image16.jpg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ShopToFeed = () => {
  return (
    <div className='shopToFeed'>
         <div className='intsgaramProducts'>
            <div className="instaImage_cont" style={{backgroundImage : `url(${image})`}}>
         </div>

      
      <div className="instaOverlay">
          <span className="insta_shopNow">SHOP NOW</span>
          <span className="insta_icon"><AddCircleOutlineIcon sx={{ fontSize: 45 }}/></span>

          <div className="instInnerCOnt">
            
            <span className="insta_skkn">@skkn</span>
            <span className="insta_likes">5665 Likes</span>
          </div>

      </div>
    </div>
    </div>
  )
}

export default ShopToFeed