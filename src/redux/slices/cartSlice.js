import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        //array of objects -> {details of product, individual quantity of each}
        cartProducts:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartQuantity+=1;
            const productToBeAdded = action.payload;
            //before adding ,check whether it is already present 
            const requiredProduct = state.cartProducts
            .find((Cprod)=>(Cprod.id==productToBeAdded.id))
            if(requiredProduct==undefined){
                // Add indQuantity property to the product being added
                state.cartProducts.push({...productToBeAdded, indQuantity: 1});
            }else{
                // Increment indQuantity of the existing product in the cart
                requiredProduct.indQuantity++;
            }
        },
        deleteFromCart:(state,action)=>{
            const productToBedelete = action.payload;
            const productIdx = state.cartProducts
            .findIndex((cprod) => (cprod.id == productToBedelete.id));
            if(productIdx != -1){
                state.cartQuantity--;
                let product = state.cartProducts[productIdx];
                if(product.indQuantity == 1){
                    state.cartProducts.splice(productIdx,1);
                }else{
                    state.cartProducts[productIdx].indQuantity--;
                }
            }
        },
    }
})

export const action = cartSlice.actions;
export default cartSlice;