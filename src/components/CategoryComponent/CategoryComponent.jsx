import './categoryComponent.css'
import Fire from '../../assets/Fire_light.svg';
import NewProduct from '../NewProduct/NewProduct';

const products = [
    {
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
        rating : 3
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
        rating : 2
    },{
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
        rating : 5
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
        rating : 3
    },{
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
        rating : 1
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity,With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
        rating : 4
    }
]

const CategoryComponent = () => {
  return (
    <div className="CategoryComponent">

        <div className="CategoryComponentRight">
                <div className="RightHeaderCategory">
                    <span className="categoryResultNumber">127 Results</span>

                    <div className="RightHeaderLeftCategory">
                        <img src= {Fire} className = "FireCategory" alt="Fire" />
                    </div>
                </div>
                <div className="ProductsCategoryContainer">
                {products.map((prod,index) => {
                return(
                    <NewProduct {...prod} key = {index}/>
                )
            })}
                </div>
        </div>
    </div>
  )
}

export default CategoryComponent