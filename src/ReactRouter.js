import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './react-router/Home';
import About from "./react-router/About";
import Dashboard from "./react-router/Dashboard";
import Error from "./react-router/Error";
import Login from "./react-router/Login";
import Products from "./react-router/Products";
const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} /> 
            {/* http://localhost:3000/dashboard/about */}
           
            <Route path="error" element={<Error />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<Error/>}/> 
        {/* uygun path bulunmadiginda Error sayfasina yonelenecek. */}
        </Route>
         <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter