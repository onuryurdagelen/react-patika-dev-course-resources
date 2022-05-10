import React, { useEffect } from 'react'

import authFetch from '../axios/interceptors';
/*

-global and custom

authFetch.interceptors.request.use(
    (request) => {
        request.headers.common['Accept'] = 'application/json';
        console.log('request sent')

        return request;
    },
    (error) => {
        return Promise.reject(error)
    }
)

authFetch.interceptors.response.use(
    (response) => {
        console.log('got response');
        return response;
    },
    (error) => {
        console.log(error.response);
        if(error.response.status === 404){
            //do something
            console.log('NOT FOUND')
        }
        return Promise.reject(error);
    }

)

*/

const url = 'https://course-api.com/react-store-products';
const Interceptors = () => {
    const fetchData = async  () =>{
        try {
            const resp = await authFetch('/react-store-products');
            console.log(resp)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <h2 className='text-center'>Interceptors</h2>
  )
}

export default Interceptors