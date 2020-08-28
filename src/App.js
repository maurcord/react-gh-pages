import React, { Component } from 'react';
import './App.css';
import ShipListContainer from './shiplistcontainer';
import InfoContainer from './infocontainer';
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
      this.setState({starWarsShips: jsonRes.results})
    })
  }
  render() {
  return (
    <div className="App">
      <p className="swHeading">Star Wars Ship Information</p>
      
      <ShipListContainer listOfShips= {this.state.starWarsShips} />
      <InfoContainer />
     
    </div>
  );
}
}
export default App;
