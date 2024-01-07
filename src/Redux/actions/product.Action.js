
import { ActionTypes } from "../components/actionTypes"



export const setProducts =(products)=>{

    return {
        type: ActionTypes.SET_PRODUCT,
        payload:products,
    }
}


export const selectedProducts=(Data)=>{

    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload:Data,
    }
}
