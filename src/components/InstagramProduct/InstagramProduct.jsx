import './instagramProduct.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShopToFeed from '../ShopToFeed/ShopToFeed';


const responsive = {
  largeDesktop: {
    breakpoint: { max: 7000, min: 3000 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 900, min: 758 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 758, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const InstagramProducts = () => {
  return (
    <div className="InstagramProductsNew">
      <Carousel responsive={responsive} infinite={true}
  swipeable={true}
  draggable={true}
  removeArrowOnDeviceType={["tablet", "mobile"]}>
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
       <ShopToFeed />
</Carousel>
    </div>
  )
}

export default InstagramProducts