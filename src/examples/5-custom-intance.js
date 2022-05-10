import React, { useEffect } from 'react'
import authFetch from '../axios/custom';
import axios from 'axios'; 

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () =>{
    console.log('custom axios instance')

    try {
      const resp1 = await authFetch('/react-store-products')
      const resp2 = await axios(randomUserUrl);
      console.log(resp1);
      console.log(resp2);

    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <h2 className='text-center'>CustomInstance</h2>
  )
}

export default CustomInstance