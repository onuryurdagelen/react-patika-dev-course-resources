import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import cartItems from '../cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
    cartItems: cartItems,
    amount: cartItems.length, //it means cart item amount
    total: 0, //total money 
    isLoading: true,
    isModalOpen:false,
    error: null
};
//async functions right here
export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
})
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
        increment: (state,action) => {
            const itemId = action.payload;
            state.amount++;
            const selectedItem = state.cartItems.find(item => item.id === itemId);
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
            const itemId = action.payload;
            const selectedItem = state.cartItems.find(item => item.id === itemId);
            // console.log(action.payload)
            if (selectedItem) {
                selectedItem.amount--;
                state.total -=parseFloat(selectedItem.price);
            }
           
        },
        removeItem: (state,action) =>{
            // console.log(action.payload)
            const itemId = action.payload;

            const restOfItems = state.cartItems.filter(item => item.id !== itemId);

            const selectedItem = state.cartItems.find(item => item.id === itemId);

            console.log(restOfItems)
            if (restOfItems.length < 1) {
                // console.log("girdi!")
                state.amount = 0;
            }
            state.total -= selectedItem.amount * selectedItem.price;
            state.amount -= selectedItem.amount;
            if (state.amount < 0) {
                state.amount = 0
            }
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
        },
        setModal: (state,action) =>{
            const isModalOpen = action.payload;
            state.isModalOpen = isModalOpen;
        }
    },
    extraReducers: {
    [getCartItems.pending] : (state) =>{
        state.isLoading = true;
    },
    [getCartItems.fulfilled] : (state,action) =>{
        state.isLoading = false;
        console.log(action);
        state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state,action) =>{
        state.isLoading = false
        state.error = action.payload;
    }
    }
});



// console.log(cartSlice);
export const {increment,
    decrement,
    clearCart,
    removeItem,
    calculateTotals,
    setModal} = cartSlice.actions;
export default cartSlice.reducer



