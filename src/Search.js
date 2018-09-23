import React, { Component } from 'react';
import './Search.css';
import {Grid, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import Columns from './Columns';

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: "",
            column: "searchResults"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    };

    render() {
        return (
            <div className="App">
                <div id="Search-Grid">
                    <form id="Search">
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <FormControl
                                type="text"
                                value={this.state.value}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
                    <Button id="Search-Button">Search</Button>
                </div>
                <Columns columnType={this.state.column}/>
            </div>
        );
    }
}
