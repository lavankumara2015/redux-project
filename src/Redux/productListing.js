
import React, { useEffect } from "react"

import ProductComponent from "./productComponents"
import axios, { Axios } from "axios"
import { useDispatch } from "react-redux"
import { setProducts } from "./actions/product.Action"


const ProductListing=()=>{

    // const products = useSelector((state)=> state);

    const dispatch = useDispatch();

    const fetchProducts= async ()=>{

        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("error" , err)
        })

        dispatch( setProducts(response.data));
       
       
    }


useEffect(()=>{

    fetchProducts()
},[])
 
    

    return(
       

        <div className="ui grid container"> 
           <ProductComponent/>
        </div>
        
        
    )
}

export default ProductListing