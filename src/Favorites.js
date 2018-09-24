import React, { Component } from 'react';
import './Favorites.css';
import Columns from './Columns';


export default class Favorites extends Component {

    // Component used to separate the sides of the applicaiton.

    render() {
        return (
            <div id="Favorites">
                <Columns input={this.props.favorites} action={this.props.remove}/>
            </div>
        );
    }
}
