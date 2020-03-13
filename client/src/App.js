import React from 'react';
import axios from 'axios';


import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }


}

export default App;
