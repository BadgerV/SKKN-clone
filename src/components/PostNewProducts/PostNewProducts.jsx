import "./postNewProducts.css";
import { useState } from "react";
import { postMyProduct } from "../../apiCalls";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PostNewProducts = () => {
  const {postProductStatus} = useSelector((store) => store.products);

  const userExists = JSON.parse(localStorage.getItem("user"));
  
    const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [desc, setDesc] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    postMyProduct(
      { name,category,price,imageLink,desc, title, userId : userExists._id },
      dispatch
    );
  }

  
  return (
    <div className="postNewProducts">
        <form className="postNewProductsForm" onSubmit = {(e) => handleClick(e)}>
            <input type="text" className="postNewProductInput" placeholder="Name of Product" onChange = {(e) => {setName(e.target.value)}} />
            <input type="number" className="postNewProductInput" placeholder="Price" onChange = {(e) => {setPrice(e.target.value)}}/>
            <input type="text" max = {50} className="postNewProductInput" placeholder="Title"onChange = {(e) => {setTitle(e.target.value)}}/>
            <input type="text"  className="postNewProductInput" placeholder="Category"onChange = {(e) => {setCategory(e.target.value)}}/>
            <input type="text"  className="postNewProductInput" placeholder="Image Link" onChange = {(e) => {setImageLink(e.target.value)}}/>

            <textarea rows = "4" className="postNewProductInput" placeholder="Description" onChange = {(e) => {setDesc(e.target.value)}}/>

            <div className="postProductButtonCont">
                <button className="postNewProductSubmit" type = "submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default PostNewProducts