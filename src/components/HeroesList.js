import React, { Component } from 'react';
import './styles.css';

class HeroesList extends Component {
    constructor(props) {
        super(props);

        this.state ={
            heroes: []
        }
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => this.setState({ heroes: data.results }));
    }

     handleClick = (ev, index) => {
        ev.preventDefault();
        this.props.handleClick(this.state.heroes[index]);
    };

    render() {
        return (
            <nav className="col">
                {this.state.heroes.map((hero, index) => (
                        <a
                        className="hero-item"
                        onClick={(ev) => this.handleClick(ev, index)}
                        key ={hero.name}
                        href="">
                        {hero.name}</a>
                ))}
            </nav>
        );
    }
}

export default HeroesList;