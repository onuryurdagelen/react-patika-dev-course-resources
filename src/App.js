import { useState } from 'react';
import './App.css';
import InputExample from './components/InputExample';
import UseEffectExample from './components/UseEffectExample';
import User from './props/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from './components/Counter';

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
  const [isVisible, setIsVisible] = useState(true)
  const [age, setAge] = useState(23);
  const [friends,setFriends] = useState(["Ahmet","Murat"]); // Array State
  const [address,setAddress] = useState({title: "Istanbul",zip:34700})
  
  console.log(age,name);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(35)}>Change Age</button>
      <hr />
      <br />
      <br />
      <h2>Friends</h2>
      {
        friends.map((friend,index) => 
        <div key={index}>{friend}</div>
        )
      }
      <button onClick={() => setFriends(["Onur",...friends])}>Add New Friend</button>
      
     <hr />
     <br />
     <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
      <button onClick={() => setAddress({...address,title: "Ankara"})}>Change Address</button>
      <hr />
      <br />
      {/* <Counter/> */}
      <hr />
      <br />
      <InputExample/>
      <hr />
      <br />
      {/* <UseEffectExample/> */}
      {isVisible && <Counter/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
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
