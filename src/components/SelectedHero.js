import React, { Component } from 'react';

class SelectedHero extends Component {
    render(){
        const {hero} = this.props;

        return (
            <div className = "col">
                <div>{hero.name}</div>
                <div>{hero.gender}</div>
                <div>{hero.height}</div>
                <div>{hero.mass}</div>
            </div>
        )
    }
}

export default SelectedHero;