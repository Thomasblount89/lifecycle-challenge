import React from 'react'
import './App.css';
import PokeFetch from './Components/PokeFetch/PokeFetch';

//  componentDidMount() {
//     console.log("did mount")
// this.setState.pokeName = this.setState.pokeName;
//  }

function App() {
  return (
    <div className="App">
      <PokeFetch  />
    </div>
  );
}

// componentDidMount() 
// console.log("did mount")
// this.setState.pokeName = this.setState.pokeName;

export default App;
