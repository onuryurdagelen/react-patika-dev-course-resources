### Setup Store

-create store.js

```js
import {confireStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {}
});
```

### Setup Provider

### Setup Cart Slice

-application feature
-create features folder/cart
-create cartSlice.js


```js
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],d
    amount: 0,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initalState,
});

```
-create CartContainer.js and CartItem.js

```js

const actionCreator = (payload) =>{
    return {type: ACTION_TYPE,payload:payload}
}
```
### async functionality with createAsyncThunk

-[Course API] (https://course-api.com/)
-https://course-api.com/react-useReducer-cart-project
-cartSlice.js

-action type
-callback function
-lifecycle actions

```js
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



--createAsyncThunk('action type','callback function')
--callback functions needs to return a Promise

export const getCartItems = createAsyncThunk('cart/getCartitems',()=>{
    return fetch(url)
            .then((resp) => resp.json())
            .catch((error) => console.log(error))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartItems.pending]: (state) =>{
            state.isLoading: true;
        },
        [getCartItems.fulfilled]: (state,action) =>{
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.reject]: (state) => {
            state.isLoading = false;
        }
    }
})
