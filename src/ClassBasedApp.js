import React, { Component } from 'react'
import Kisi from './class-based/Kisi';

export default class ClassBasedApp extends Component {
    constructor()
    {
        super();
        this.state = {
            ad: "",
            soyad: "",
            kisiler:
            [
                {
                    id: 1,
                    ad : 'ibrahim',
                    soyad: 'yazici'
                },
                {
                    id: 2,
                    ad : 'ugur',
                    soyad: 'kose'
                },
            ]
        }
    }
   ekle = () =>{
    console.log(this.state.ad+ " "+this.state.soyad)
    var kisiler = this.state.kisiler;
    let maxId = kisiler[kisiler.length - 1].id++;
    
    kisiler.push({ad: this.state.ad,soyad: this.state.soyad,id: maxId})
    this.setState({kisiler:kisiler})
   }
   setAd = (event) =>{
    this.state.ad = event.target.value;
    }
    setSoyad = (event) =>{
        this.state.soyad = event.target.value;
    }
    deleteKisi(id) {
        console.log(id);
        let kisiler = this.state.kisiler.filter(c => c.id !==id);
       
        console.log(kisiler);
        this.setState({kisiler: kisiler});
    }
  render() {
      
    return (
      <div>
          <input type="text" onChange={this.setAd}/>
          <input type="text" onChange={this.setSoyad} />
          <button type="button" onClick={this.ekle}>ekle</button>
          {this.state.kisiler.map((kisi)=>{
              return (
                <Kisi deleteKisi={() =>this.deleteKisi(kisi.id)} key={kisi.id} kisi={kisi}/>
              )
          })}
      </div>
    )
  }
}
