import './App.css';
import React from 'react';

import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users => this.setState({monsters: users}))
  }
  onSearchChange = event => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox 
                placeholder='search monsters' 
                onSearchChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
