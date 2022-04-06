import React, { useState } from 'react'

const InputExample = () => {
    
    const [form,setForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    

    // const onChangeName = (event) =>  setName(event.target.value);
    // const onChangeSurname = (event) =>  setSurname(event.target.value);


    //Cok fazla input oldugunnda kullanilan yontem asagidadir.
    const onChangeInput = (event) =>{
        setForm({...form,[event.target.name] : event.target.value})
    }
  return (
    <div>
        Please enter a name:{' '}
        <input 
        type="text" 
        value={form.name}
        name="name"
        onChange={onChangeInput}
        />
        <p>Name: {form.name}</p>
        <br />
        Please enter a surname:{' '}
        <input 
        type="text" 
        value={form.surname}
        name="surname"
        onChange={onChangeInput}
        />
        <p>Surname: {form.surname}</p>
        <br />
        Please enter a Email Address:{' '}
        <input 
        type="email" 
        value={form.email}
        name="email"
        onChange={onChangeInput}
        />
        <p>Email Address: {form.email}</p>
        <br />
        Please enter a password:{' '}
        <input 
        type="password" 
        value={form.password}
        name="password"
        onChange={onChangeInput}
        />
        <p>Password: {form.password}</p>
    </div>
  )
}

export default InputExample