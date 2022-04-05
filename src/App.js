import { useState } from 'react';
import './App.css';
import User from './props/User';

const friends = [
  {
    id: 1,
    name: 'Ahmet'
  },
  {
    id:2,
    name: 'Onur'
  },
  {
    id:3,
    name: 'Gokhan'
  }
]



function App() {
  //State tanimlama
  const [name,setName] = useState('Onur');
  const [age, setAge] = useState(23);
  
  console.log(age,name);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(35)}>Change Age</button>
      <>
      {/* <User 
      surname="Yurdagelen" 
      age={23}
      friends={friends}
      isLoggedIn={true}
      address={{
        title: "Uskudar/Istanbul",
        zip:34700
      }}
      /> */}
      
      </>
    </div>
  );
}

export default App;
