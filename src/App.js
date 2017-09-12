import React, { Component } from 'react';
import './App.css';
import HeroesList from'./components/HeroesList';
import HeroCard from './components/HeroCard';

class App extends Component {

    constructor() {
        super();

        this.state = {
            hero: {}
        }
    }
    
    handleClick = (hero) => {
        this.setState({ hero });
    };

    render() {
    return (
      <div className="">
          <HeroesList handleClick={this.handleClick} />
          <SelectedHero hero={this.state.hero} />
      </div>
    );
  }
}

export default App;
