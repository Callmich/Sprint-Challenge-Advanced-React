import React from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import NavBar from './NavBar';


import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log('response', response.data)
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        console.log('There was an error', error)
      })
  }

  render(){
    return(
      <div>
        <NavBar/>
        <h2>US Women's Soccer Team</h2>
        {this.state.data.map(player => 
          <ProfileCard player={player}/>)}
      </div>
    )
  }


}

export default App;
