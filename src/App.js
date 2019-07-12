import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
          .then( response => response.json())
          .then( users => this.setState({monsters: users}))
         }

render() {
  return (
    <div className="App">
      <input 
        type='search' 
        placeholder="search monsters"
        // code below logs value of input from keyboard and console.logs it, but it has to be set as the 2nd parameter of the setState function because it is async.
        onChange={e => this.setState({ searchfield: e.target.value }, () => console.log(this.state)) }/>

    <CardList monsters={this.state.monsters} />

    </div>
)
}
}
export default App;
