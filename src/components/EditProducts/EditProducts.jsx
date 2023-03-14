//importing css file
import "./editProducts.css";

//importing modules from react
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../apiCalls";


const EditProducts = () => {
  const dispatch = useDispatch();
  const {isLoading, myProducts} = useSelector((store) => store.products);

  //declaring input to be found constant
  const [finding, setFinding] = useState("");

  //declaring variable that designates being foubd
  const [isFound, setIsFound] = useState(false);

  //decalriwng variable that designatethe found product
  const [found, setFound]= useState({});

  //decalring individual variables for the form inuts

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [desc, setDesc] = useState("");

  //declaring function that finds products
  const handleSearch = () => {
    for(var i = 0; i < myProducts.length; i++) {
      if(myProducts[i].name == finding) {
        setFound(myProducts[i])
        setIsFound(true)

        setName(myProducts[i].name)
        setPrice(myProducts[i].price)
        setDesc(myProducts[i].desc)
        setTitle(myProducts[i].title)
        setCategory(myProducts[i].category)
        setImageLink(myProducts[i].imageLink)
      } 
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    updateProduct(
      { },
      dispatch
    );
  };

  //decalring 
  return (
    <div className = "ediProduct">
        <div className="editProductSearchArea">
          <input type="text" placeholder="Search product" className="editProductInput" onChange = {(e) => setFinding(e.target.value)} />
          <button className="editProductButton" onClick = {handleSearch}>Search</button>
        </div>

        {
          isFound ? <form className="postNewProductsForm" onClick = {(e) => handleClick(e)}>
          <input type="text" className="postNewProductInput" defaultValue = {found.name} placeholder="Name of Product" onChange = {(e) => {setName(e.target.value)}}/>
          <input type="number" className="postNewProductInput" defaultValue = {found.price} placeholder="Price" onChange = {(e) => {setPrice(e.target.value)}}/>
          <input type="text" max = {50} className="postNewProductInput" defaultValue = {found.name} placeholder="Title" onChange = {(e) => {setTitle(e.target.value)}}/>
          
          <input type="text"  className="postNewProductInput" placeholder="Category" defaultValue = {found.category} onChange = {(e) => {setCategory(e.target.value)}}/>
          <input type="text"  className="postNewProductInput" placeholder="Image Link" defaultValue = {found.imageLink} onChange = {(e) => {setImageLink(e.target.value)}}/>
          <textarea rows = "3" className="postNewProductInput" defaultValue = {found.description} placeholder="Description" onChange = {(e) => {setDesc(e.target.value)}}/>


          <div className="postProductButtonCont">
              <button className="postNewProductSubmit" type = "submit">Submit</button>
          </div>
      </form> : <></>
        }
    </div>
  )
}

export default EditProducts