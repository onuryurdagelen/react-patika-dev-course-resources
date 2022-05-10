import React,{useEffect,useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("")
    //Lifecycle with useEffect
    
   
    // useEffect(()=>{
        
    //     console.log("State guncellendi...");
    // })
    
    // useEffect(() =>{
    //     console.log("Component mount edildi!")
    //     const interval = setInterval(() =>{
    //         setNumber((a) => a + 1)
    //     },1000)
    //    return () => clearInterval(interval)
    // },[])

   
    useEffect(() =>{
        console.log("Number state guncellendi.");
    },[number])

    useEffect(() =>{
        console.log("Name state guncellendi.");
    },[name])
  return (
    <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
    <hr />
    <h1>{name}</h1>
    <button onClick={() => setName("Onur")}>Click</button>
</div>
  )
}

export default Counter