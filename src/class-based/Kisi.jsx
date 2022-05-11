import React, { Component } from 'react'

export default class Kisi extends Component {
    constructor(){
        super();
    }
  render() {
    return (
        <div key={this.props.kisi.id}>
        <span>{this.props.kisi.ad}</span> | <span>{this.props.kisi.soyad}</span>

        <button onClick={this.props.deleteKisi(this.props.kisi.id)}>Delete</button>
      </div>
    )
  }
}
