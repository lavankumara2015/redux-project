import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import NavBar from "../Redux/Navbar"
import ProductListing from "../Redux/productListing"
import ProductDetails from "../Redux/productdDetailes"
import ErrorS from "./error"


const Navigation=()=>{

    return(
        <>
        <BrowserRouter>
         {/* <NavBar/> */}
        <Routes>

<Route path="/"  Component={ProductListing}/>
<Route path="/product/:productId"  Component={ProductDetails}/>
<Route path="*"  Component={ErrorS}/>

        </Routes>
        </BrowserRouter>
      
        
        </>
    )
}

export default Navigation