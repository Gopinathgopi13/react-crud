import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductStyle from "./Products.module.css"
import { useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

function AllProduct() {
    let [product, setProduct] = useState([])


    let getProducts = async ()=>{
        try{
           let {data} =  await axios.get(`http://localhost:3000/product`)
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


    //~ view
    let navigateToProduct = useNavigate();
    let viewProduct = (pid)=>{
        navigateToProduct(`/product/${pid}`)
    }

    // ~ updateProduct 
    let updateProduct = (pid)=>{
        navigateToProduct(`/updateproduct/${pid}`)
    }

    // ~ Delete
    let deleteProduct =async (pid)=>{
        try {
            await axios.delete(`http://localhost:3000/product/${pid}`)
            getProducts()
        } catch (error) {
            
        }
    }


  return (
    <>
      <table>
        <thead>
            <tr>
                <th>SL No</th>
                <th>Name</th>
                <th>image</th>
                <th>Price</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map(({id,title, price,image})=>{
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td><img src={image} height="200px"/></td>
                        <td>{price}</td>
                        <td><button className={ProductStyle.view} onClick={()=>{viewProduct(id)}}>View</button></td>
                        <td><button className={ProductStyle.update} onClick={()=>{updateProduct(id)}}>Update</button></td>
                        <td><button className={ProductStyle.delete} onClick={()=>{deleteProduct(id)}}>Delete</button></td>
                    </tr>
                })
            } 
        </tbody>
      </table>
    </>
  );
}

export default AllProduct;
