import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import cartItems from '../cartItems';
const initialState = {
    cartItems: cartItems,
    amount: cartItems.length, //it means cart item amount
    total: 0, //total money 
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            
        },
        increment: (state,action) => {
            state.amount++;
            let selectedItem = state.cartItems.find(item => item.id === action.payload);
            // console.log(action.payload)
            selectedItem.amount++;
            let totalAmount = state.cartItems.reduce(() =>{
                return state.total + selectedItem.price;
            },0)
            console.log(totalAmount);
            state.total += totalAmount;
            // console.log(selectedItem);
        },
        decrement: (state) =>{
            state.amount--;
        },
        removeItem: (state,action) =>{
            // console.log(action.payload)
            const restOfItems = state.cartItems.filter(item => item.id !== action.payload);
            console.log(restOfItems)
            state.cartItems = restOfItems;
            
        }
    }
});

// console.log(cartSlice);
export const {increment,decrement,clearCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer
