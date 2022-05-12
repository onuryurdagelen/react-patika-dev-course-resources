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
            // return {cartItems: []}
            
        },
        increment: (state,action) => {
            state.amount++;
            const selectedItem = state.cartItems.find(item => item.id === action.payload);
            // console.log(action.payload)
            if (selectedItem) {
            selectedItem.amount++;
            state.total +=parseFloat(selectedItem.price);
            }
            // console.log(totalAmount);
            // state.total += totalAmount;
            // console.log(selectedItem);
        },
        decrement: (state,action) =>{
            state.amount--;

            const selectedItem = state.cartItems.find(item => item.id === action.payload);
            // console.log(action.payload)
            if (selectedItem) {
                selectedItem.amount--;
                state.total -=parseFloat(selectedItem.price);
            }
           
        },
        removeItem: (state,action) =>{
            // console.log(action.payload)
            const restOfItems = state.cartItems.filter(item => item.id !== action.payload);
            console.log(restOfItems)
            state.cartItems = restOfItems;
            
        },
        calculateTotals: (state) =>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount +=item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    }
});

// console.log(cartSlice);
export const {increment,decrement,clearCart,removeItem,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer
