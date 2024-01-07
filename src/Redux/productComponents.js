


import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const ProductComponent=()=>{
    const products =useSelector((state) => state.allProducts.products)
  
    const renderLIst= products.map((product) => {

        return( 
             <div className="card" style={{ width: "18rem" }} key={products.id}>

            <Link to={`/product/${product.id}`}>
          
            <img src={product.image} className="card-img-top" alt="..." height={180}/>
            <div className="card-body">
              <h5 className="card-title">{product.category}</h5>
              <h4 className="card-text"> $
            {product.price}
              </h4>
             
            </div></Link>
          </div>

        )
    })

   

    return(
        
        <>{renderLIst}</>
    
    )
}
export default ProductComponent