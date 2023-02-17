import { useEffect } from 'react';
import './mainSection2.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Buying from '../Buying/Buying';
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from '../../apiCalls';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const MainSection2 = () => {
  const dispatch = useDispatch();


  
    useEffect(() => {
      getAllProducts(dispatch);
    }, [])

   const {allProducts, isLoading} = useSelector((store) => store.products);

   console.log(isLoading)

  return (
    <>
      {isLoading ? (<h1>Loading ...</h1>) : (
        <div className="mainSection2">
        <span className="mainSection2_ritual">THE RITUAL</span>
        <Carousel responsive={responsive} infinite={true}
    swipeable={true}
    draggable={true}
    removeArrowOnDeviceType={["tablet", "mobile"]}>
          {allProducts.map((product) => {
            console.log(product)
            return (
              <Buying key={product._id} props = {product}/>
            )
          })}
  </Carousel>
      </div>
      )}
    </>
  )  

}

export default MainSection2