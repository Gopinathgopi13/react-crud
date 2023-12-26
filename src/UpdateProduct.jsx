import React, { useEffect, useState } from 'react'
import ProductStyle from "./AddProduct.module.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  let [productDetails, setProductDetails] = useState({id:"",title:"",price:"",description:"",category:"",image:""})

  let {pid} = useParams();

  let navigateToProduct = useNavigate();
  let getProducts = async ()=>{
    try{
       let {data} =  await axios.get(`http://localhost:3000/product/${pid}`)
       setProductDetails(data);
       console.log(data);
    }
    catch(err){
        console.log(err);
        }
}

useEffect(()=>{
    getProducts()
},[])

  let updateData = ({target:{name,value}})=>{
    setProductDetails({...productDetails,[name]:value});
  }

  let submitProductDetails = async (e)=>{
    e.preventDefault()
    try {
      let data = await axios.put(`http://localhost:3000/product/${pid}`,productDetails)
      // setProductDetails({id:"",title:"",price:"",description:"",category:"",image:""})
      navigateToProduct(`/allproduct`)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onClick={submitProductDetails}>
        <h2>Enter the Product details</h2>
        <div>
          <input type="number" placeholder='Enter the Id' onChange={updateData} name='id' value={productDetails.id}/>
        </div>
        <div>
          <input type="text" placeholder='Enter the product name' onChange={updateData} name='title' value={productDetails.title}/>
        </div>
        <div>
          <input type="number" placeholder='Enter the price' onChange={updateData} name='price' value={productDetails.price}/>
        </div>
        <div>
          <input type="text" placeholder='Enter the category' onChange={updateData} name='category' value={productDetails.category}/>
        </div>
        <div>
          <input type="text" placeholder='Enter the imageURL' onChange={updateData} name='image' value={productDetails.image}/>
        </div>
        <div>
          <input type="text" placeholder='Enter the description' onChange={updateData} name='description' value={productDetails.description}/>
        </div>
        <div>
          <button type='submit'>Add Product</button>
        </div>
      </form>
    </>
  )
}

export default UpdateProduct