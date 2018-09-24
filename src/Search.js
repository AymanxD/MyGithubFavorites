import React, { Component } from 'react';
import './Search.css';
import {Grid, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import Columns from './Columns';
const axios = require("axios");

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: "",
            column: "searchResults",
            results: [{name: "hello", language: "mello", latest:"hello", link:"mello"}],
            rawResults: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.searchTags = this.searchTags.bind(this);
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});

        if(e.target.value === ""){
            this.setState({results: []});
        }
    };

    search = (e) => {

        let replacedSearch = this.state.value.replace(" ", "+");
        axios.get('https://api.github.com/search/repositories?q=' + replacedSearch)
            .then((response) => {

                let responseSlice = response.data.items.slice(0, 10);
                this.setState({rawResults: responseSlice});
                console.log(response.data.items);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
                console.log(this.state.rawResults);
                this.searchTags();
            });
    };

    searchTags = () => {
        let resultsArray = [];

        this.state.rawResults.forEach((element) => {
            let obj = {
                name: element.name,
                language: element.language,
                tag: "",
                link: "Add"};

            axios.get(element.tags_url)
            .then((response) => {

                if(typeof response.data[0].name !== "undefined"){
                    obj.tag = response.data[0].name;
                }
                resultsArray.push(obj);

                this.setState(prevState => ({
                    results: [...prevState.results, obj]
                }));

                console.log(response.data);
            })
            .catch((error) => {
                // handle error
                resultsArray.push(obj);

                this.setState(prevState => ({
                    results: [...prevState.results, obj]
                }));

                console.log(error);
            })
            .then(() => {
                // always executed
                console.log(resultsArray);
            });
        });

        this.setState({results: resultsArray}, () => {
            console.log(this.state.results);
            console.log(resultsArray);
        });
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
                    <Button id="Search-Button" onClick={this.search}>Search</Button>
                </div>
                <Columns columnType={this.state.column} input={this.state.results}/>
            </div>
        );
    }
}
