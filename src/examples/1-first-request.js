import axios from "axios";
import { useEffect } from "react";  

const url = 'https://course-api.com/react-store-productss'

const FirstRequest = () =>{
    const fetchData = async () =>{
        try {
            const response = await axios.get(url);
            console.log(response);
            const data = response.data;

            console.log(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return <h3 className="text-center">First Request</h3>
}

export default FirstRequest;