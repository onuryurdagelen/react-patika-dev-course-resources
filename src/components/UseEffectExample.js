import React, { useState,useEffect } from 'react'

const UseEffectExample = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("")
  

    //Lifecycle with useEffect
    
    //Herhangi bir kontrole tabi olmamalidir.(Tum hooklar icin gecerlidir.)
    //Component'in tepesinde olmalidir.
    useEffect(()=>{
        //Uygulama icerisinde her bir state degisiminde tetiklenmesini saglar.
        console.log("State guncellendi...");
    })
    //componentDidMount => DOM'a mount oldugu anda calismasi demektir.
    //[] => Component mount edildigi ani yakalarsin demektir.
    useEffect(() =>{
        console.log("Component mount edildi.");
    },[])

    //[] => hangi state'in degisimini yakalamak istersek icine yazilir.Icine istedigimiz kadar state girilebilir.
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

export default UseEffectExample