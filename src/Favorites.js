import React, { Component } from 'react';
import './Favorites.css';
import {Grid, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import Columns from './Columns';


export default class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: "favorites",
        };
    }

    render() {
        return (
            <div id="Favorites">
                <Columns columnType={this.state.column}/>
            </div>
        );
    }
}
