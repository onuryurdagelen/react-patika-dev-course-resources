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
    error: null
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
        [getCartItems.reject]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})
```
### Options

```js

npm install axios


-cartSlice.js
export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (_,thunkAPI) =>{
        try{
            console.log(thunkAPI.getState());
            const resp = await axios.url(url)
            return resp;
        }
        catch(error){
            return thunkAPI.rejectWithValue('There was an error...')
        }
        
    }
)

```

### ROUTING
```js

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```

### Index Routes

-Index routes render in the parent routes outlet at the parent route's path.
-Index routes match when a parent route matches but none of the other children match.
-Index routes are the default child route for a parent route
-Index routes render when the use hasn't clicked one of the items in a navigation list yet.

-copy Home.js content
-SharedLayout.js

```js

import {Link,Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () =>{
    return(
    <>
    <Navbar/>
    <section className='section'>
    <Outlet/>
    </section>
    )
}
```

### NavLink(style)

-StyledNavbar.js

```js
import {NavLink} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

<nav className='navbar'>
  <NavLink
    to='/about'
    style={({ isActive }) => {
      return { color: isActive ? 'red' : 'grey' };
    }}
  >
    Home
  </NavLink>
</nav>;

<nav className='navbar'>
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
</nav>
```
### Reading URL Params
```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```

### useParams()

```js

import { Link } from 'react-router-dom';
import products from '../data';
const Products = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;

```

### useNavigate()

```js

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

--Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

--Dashboard.js

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
  ```

### Protected Route
--App.js
```js

<Route
  path='dashboard'
  element={
    <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>

--ProtectedRoute.js

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
```