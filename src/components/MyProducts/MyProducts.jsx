import './myProducts.css';
import img from '../../assets/image13.jpg';
import StarRatingComponent from 'react-star-rating-component';
import { getMyProducts } from '../../apiCalls';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const MyProducts = () => {
  const dispatch = useDispatch();
  const {isLoading, myProducts} = useSelector((store) => store.products);


  const userExists = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getMyProducts(userExists._id, dispatch);
    
  }, [])

  console.log(myProducts)
  return (
    <div className="myProducts_container">
        {
          !isLoading ? (
            myProducts.map((product) => {
              return (
                    <div className="myProducts_oneProducts">
                      <div className="myProductImageCont">
                        <img src = {product.imageLink} alt = "product" className='MyProductImage' />
                      </div>
                

                <div className="MyProductSecondPart">
                  <span className="myProductName">{product.name}</span>

                  <div className="myProductStarAndSold">
                  <StarRatingComponent 
                    name="rate2" 
                    editing={false}
                    starCount={5}
                    value={product.rating}
                    starColor={`#ac9f9f`} 
                    emptyStarColor={`white`}
                  />
                    <span className="myProductSold">Sold : 15</span>
                  </div>
                </div>

                <div className="myProductThirdPart">
                  <span className="myProductPrice">${product.price}</span>
                </div>
            </div>  
              )
            })
          ) : <></>
        }
    </div>
  )
}

export default MyProducts