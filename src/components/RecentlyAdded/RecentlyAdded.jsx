import './recentlyAdded.css';
import NewProduct from '../NewProduct/NewProduct';

const products = [
    {
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need"
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity"
    },{
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need"
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity"
    },{
        name : "Blue T-Shirt",
        price : "5,000",
        description : "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need"
    },
    {
        name : "The Last Perfume",
        price : "2,500",
        description : "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity"
    }
]


const RecentlyAdded = () => {
  return (
    <div className='Recently'>
        <span className="recentlyAdded_header">Recently Added</span>

        <div className="RecentlyAdded">
            {products.map((prod,index) => {
                return(
                    <NewProduct {...prod} key = {index}/>
                )
            })}
        </div>  
    </div>
  )
}

export default RecentlyAdded