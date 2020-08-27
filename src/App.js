import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ship1 from './ship1.js';
import Ship2 from './ship2.js';
import Ship3 from './ship3.js';
import Ship4 from './ship4.js'
import ShipListContainer from './shiplistcontainer';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      starWarsShips: []
    }
  }
  componentDidMount() {
    fetch("https://swapi.dev/api/starships/")
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes)
      this.setState({starWarsShips: jsonRes})
    })
  }
  
  
  
  
  
  render() {
  return (
    <div className="App">
      <p className="swHeading">Star Wars Ship Information</p>
      
      <ShipListContainer />

     
    </div>
  );
}
}
export default App;
