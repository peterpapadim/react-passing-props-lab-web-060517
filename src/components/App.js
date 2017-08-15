import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  handleList = () => {
    if (!this.state.currentFilter) {
      return this.state.fruit
    }
    else if (this.state.currentFilter === 'all') {
      return this.state.fruit
    }
    else {
      return this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);
    }
  }

  render(){
    return(
      <FruitBasket
        handleChange={this.handleFilterChange}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
        list={this.handleList}
      />
    )
  }
}

export default App;
