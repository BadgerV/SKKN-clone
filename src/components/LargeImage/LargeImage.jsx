import './largeImage.css';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWallpaperLink } from '../../apiCalls';


const LargeImage = () => {

  const dispatch = useDispatch();

  const { wallpaperLink,isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    getWallpaperLink(dispatch)
  }, [])


  

  return (
    <>
      {isLoading ? (<p>Loading</p>) : 
      (
        <div className='large_image' style={{backgroundImage : `url(${wallpaperLink})`}}>
        <div className="largeImage_container">
          <div className="largeImage_text">THE BEST OF SKKN</div>
          <span className="largeImage_subText">A minimalistic, travel-friendly case sized for the 9-product ritual</span>
          <div className="largeImage_shopNow">SHOP NOW</div>
        </div>
    </div>
      )}
    </>
  )
}



export default LargeImage