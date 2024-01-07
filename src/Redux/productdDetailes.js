
import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectedProducts } from "./actions/product.Action"


const ProductDetails = () => {


    const product = useSelector((state) => state.products)

 

    const productId = useParams();



    const dispatch = useDispatch()


    const fetchProductDetail = async () => {

        const response = await axios.get(`https://fakestoreapi.com/products/ ${productId}`)
            .catch((error) => {
                console.log("error", error)
            })

        dispatch(selectedProducts(response.data))

        console.log( dispatch(selectedProducts(response.data)));

    }

    useEffect(() => {


        if (productId && productId != "") fetchProductDetail()
    }, [productId])




    return (
        <>
            <div>
                <div className="card" style={{ width: "18rem" }} key={product.id}>
                    <img src={product.image} className="card-img-top" alt="..." height={180} />
                    <div className="card-body">
                        <h5 className="card-title">{product.category}</h5>
                        <h4 className="card-text"> $
                            {product.price}
                        </h4>

                    </div>
                </div>
            </div>

        </>
    )
}
export default ProductDetails