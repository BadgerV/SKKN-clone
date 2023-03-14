import './category.css';
import image from '../../assets/image17.jpg';

const Category = ({name, desc, image}) => {
  return (
    <div className="category">
            <div className="absoluteBackground" />
        <div className="categoryImageContainer">
            <img src = {image} alt = "Category" className='categoryImage'/>
        </div>
            <span className="categoryName">{name}</span>
            <span className="categoryDescription">{desc}</span>

            <button className="categoryButton">SHOP NOW</button>
    </div>
  )
}

export default Category