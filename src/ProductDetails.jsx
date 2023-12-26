import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  let [product, setProduct] = useState();
  let {pid} = useParams();
  console.log(pid);

  let getProducts = async ()=>{
    try{
       let {data} =  await axios.get(`http://localhost:3000/product/${pid}`)
       setProduct(data);
       console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    getProducts()
},[])

  return (
    <>
    {/* <img src={product.image} height="300px"/>
    <h1>{product.title}</h1>
    <h3>{product.price}</h3>
    <h3>{product.category}</h3>
    <h3>{product.description}</h3> */}
    {/* <h3>{product.rating.rate}</h3>
    <h3>{product.rating.count}</h3>  */}
    </>
  )
}

export default ProductDetails