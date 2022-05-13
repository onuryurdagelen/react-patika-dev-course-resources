import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './react-router/components/SharedLayout';
import About from './react-router/pages/About';
import Error from './react-router/pages/Error';
import Home from './react-router/pages/Home';
// import Navbar from './react-router/components/Navbar';
import Dashboard from './react-router/pages/Dashboard'
import Products from './react-router/pages/Products';
import SingleProduct from './react-router/pages/SingleProduct';
import Login from './react-router/pages/Login';
import ProtectedRoute from './react-router/pages/ProtectedRoute';
import SharedProductsLayout from './react-router/pages/SharedProductsLayout';

const Routing = () => {
    const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}/> 
          {/* Site yuklendiginde index parametreli components calisir.SharedLayout componentinda ise Outlet componenti sayesinde
          ilgili route ile ilgili component varsa o componenti dondurur.
          */}
        <Route path='about' element={<About />} />
        <Route path='products' element={<SharedProductsLayout/>}>
        <Route index element={<Products />} />
        <Route path=':productId' element={<SingleProduct />} />
        </Route>
        <Route path='login' element={<Login setUser={setUser} />} />
        <Route path='dashboard' element={
        <ProtectedRoute user={user}>
        <Dashboard user={user} />
      </ProtectedRoute>
        } />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    <footer>our footer</footer>
  </BrowserRouter>
  )
}

export default Routing