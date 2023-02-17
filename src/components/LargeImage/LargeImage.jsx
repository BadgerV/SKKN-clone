import './largeImage.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


const LargeImage = () => {
  const [wallpaperLink, setWallpaperLink] = useState("");
  const [loading, setLoading] = useState(false);


   const url = "http://localhost:3000/api/";

   const getWallpaper = () => {
    setLoading(true)
    axios.get(`${url}getWallpaper`)
    .then((res) => {
      const result = (res.data[0].wallpaperLink);
      setWallpaperLink(result)
    })
    setLoading(false);
   }

   useEffect(() => {
      getWallpaper();  
   }, [])

   useEffect(() => {
   }, [wallpaperLink])


  return (
    <>
      {loading ? (<p>Loading</p>) : 
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