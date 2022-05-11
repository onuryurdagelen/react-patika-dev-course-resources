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

-CartContainer.js

