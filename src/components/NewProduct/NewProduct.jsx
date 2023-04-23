import "./newProduct.css";
import image from "../../assets/image18.jpg";
import image1 from "../../assets/image11.jpg";
import StarRatingComponent from "react-star-rating-component";

const NewProduct = ({ name, price, description, rating }) => {
  const realName = name.toUpperCase();
  const reaelRating = +rating;
  return (
    <div className="NewProduct">
      <div className="NewProductImageContainer">
        <img src={image1} alt="" className="NewProductImage" />
      </div>

      <div className="NewPoductPart">
        <div className="NameAndPriceProduct">
          <div className="NewProductNameAndPrice">
            <span className="newPrdocuctName">{realName}</span>
            <span className="newPrdocuctPrice">N{price}</span>
          </div>

          <div className="newProductDescription">{description}</div>
        </div>
        <div className="starRating">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={reaelRating}
            starColor={`white`}
            emptyStarColor={`rgba(0, 0, 0, 0.7)`}
          />
        </div>

        <button className="newProductButton">ADD TO CART</button>
      </div>
    </div>
  );
};

export default NewProduct;
