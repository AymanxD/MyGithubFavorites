import React, { Component } from 'react';
import './Favorites.css';
import Columns from './Columns';


export default class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: "favorites",
            favorites: [{name: "hello", language: "mello", latest:"hello", link:"mello"}]
        };
    }

    render() {
        return (
            <div id="Favorites">
                <Columns columnType={this.state.column} input={this.state.favorites}/>
            </div>
        );
    }
}
