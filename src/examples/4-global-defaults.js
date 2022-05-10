import axios from 'axios';
import React, { useEffect } from 'react'

/*

axios.defaults.headers.common['Accept] = 'application/json'
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-type'] =
'application/x-www-form-urlencoded';

###Custom Instance
const authFetch = axios.create({
    baseURL = 'https://course-api.com/,
    headers: {
        Authorization: `Bearer ${jwt}`,
    }
})
*/

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api'


const GlobalInstance = () => {

    const fetchData = async () =>{
        try {
            const resp1 = await axios(productsUrl);
            const resp2 = await axios(randomUserUrl);
            console.log(resp1);
            console.log(resp2)
        } catch (error) {
            
        }
    }

    useEffect(() =>{
        fetchData();
    },[])
  return (
    <h2 className='text-center'>global instance</h2>
  )
}

export default GlobalInstance