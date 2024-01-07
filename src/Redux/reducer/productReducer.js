import { ActionTypes } from "../components/actionTypes";




const initialState ={

    products:[],
    selectedProduct:[]
}


export const productReducer =(state=initialState, {type , payload})=>{

switch (type) {
    case ActionTypes.SET_PRODUCT:
        return {...state,products:payload}
    default:
        return state

      
}

}

export const selectedProductReducer = (state=initialState, {type, payload}) =>{

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            
            return {...state,Data:payload}
    
        default:
            return state
    }
}