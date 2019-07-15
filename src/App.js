import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

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
  const { monsters, searchfield } = this.state
  // above destructuring is the same as setting const monsters = this.state.monsters and const searchfield = this.state.searchfield
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )

  return (
    <div className="App">

    <SearchBox 
            placeholder="search monsters"
            handleChange={e => this.setState({ searchfield: e.target.value }, () => console.log(this.state)) }
    />
    <CardList monsters={filteredMonsters} />

    </div>
)
}
}
export default App;
