import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import cartItems from '../cartItems';
const initialState = {
    cartItems: cartItems,
    amount: 1, //it means cart item amount
    total: 0, //total money 
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer
