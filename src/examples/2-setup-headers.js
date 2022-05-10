import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url = 'https://icanhazdadjoke.com/';
//Accept : 'application/json'

const SetupHeaders = () => {
     const [joke,setJoke] = useState('random dad joke');

    const fetchDadJoke = async () => {
     console.log('fetch dad joke');
     
     try {
         //ilk basta html olarak aliyorduk fakat izinlere json olarak izin verdigimiz icin json olarak aldik.
         const resp = await axios.get(url,{
                headers: {
                    Accept: 'application/json'
                }
            })
         console.log(resp)
         const {joke} = resp.data;
         setJoke(joke);
     } catch (error) {
         console.log(error.response.data.message);
     }
    }
    useEffect(()=>{
        fetchDadJoke();
    },[])
  return (
    <section>
        <button className='btn' onClick={fetchDadJoke}>random joke</button>
        <p className='dad-joke'>{joke}</p>
    </section>
  )
}

export default SetupHeaders