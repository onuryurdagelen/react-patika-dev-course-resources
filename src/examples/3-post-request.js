import axios from 'axios';
import React, { useState } from 'react'

/*

-send data to the server
-axios.post(url,{data})
-more options (auth header) - axios.post(url,{data},{})

*/

// try {
//     const resp = await axios.post(url,{data})
// } catch (error) {
//     console.log(error.response.data)
// }

const url = 'https://course-api.com/axios-tutorial-post'

const PostRequest = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(name,email);

        try {
            const resp = axios.post(url,{
                name,
                email
            })
            console.log(resp.data);
        } catch (error) {
         console.log(error.response)   
        }
    }
  return (
    <section>
        <h2 className="text-center">post request</h2>
        <form  className="form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name" className='form-label'>
                    name
                </label>
                <input 
                type="text" 
                className='form-input'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className='form-label'>email</label>
                <input 
                type="email"
                className='form-input'
                id='email'
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-block'>login</button>
        </form>
    </section>
  )
}

export default PostRequest