import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // action
        // function to add items to cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        // FUNCTION TO REMOVE ITEMS FROM CART
        removeFromCart:(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)
        },
        // to empty cart
        emptyCart:(state)=>{
          return  state=[]
        }

    }
})
export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer