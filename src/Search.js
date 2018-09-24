import React, { Component } from 'react';
import './Search.css';
import {Grid, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import Columns from './Columns';
import Favorites from './Favorites';
const axios = require("axios");

export default class Search extends Component {

    // The state object is used throughout the program to edit, add and remove repositories.
    constructor(props){
        super(props);
        this.state = {
            value: "",
            results: [],
            rawResults: [],
            rawFavorites: [],
            favorites: [],

            // Add's a repository to the favorites list.
            addRepo: (key) => {

                let addition = {
                    name: this.state.results[key].name,
                    language: this.state.results[key].language,
                    tag: "",
                    link: "Remove"
                };

                this.setState(prevState => ({
                    rawFavorites: [...prevState.rawFavorites, addition]
                }), () => {

                    this.state.results[key].link = "";
                    this.forceUpdate();

                    if(this.state.rawFavorites.length > 1){
                        this.setState({
                            favorites: this.state.rawFavorites
                        })
                    }
                });


            },

            // Removes a repository from the favorites list
            removeRepo: (key) => {

                this.state.favorites.splice(key, 1);
                this.forceUpdate();

                console.log(key)
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.searchTags = this.searchTags.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // Handles enter key press for input
    handleKeyPress = (event) => {
        if (event.which === 13) {
            event.preventDefault();
            this.search();
        }
    };

    // Saves entered value, and clears the search.
    handleChange = (e) => {
        this.setState({value: e.target.value});

        if(e.target.value === ""){
            this.setState({results: []});
        }
    };

    // Uses an axios REST API call to retrieve the names and languages of repositories.
    search = (e) => {
        this.setState({results: []});

        let replacedSearch = this.state.value.replace(" ", "+");
        axios.get('https://api.github.com/search/repositories?q=' + replacedSearch)
            .then((response) => {

                // Retrieve only ten repositories.
                let responseSlice = response.data.items.slice(0, 10);
                this.setState({rawResults: responseSlice});
            })
            .catch((error) => {

            })
            .then(() => {

                this.searchTags();
            });
    };

    // Retrieves the latest tags of the repositories through another REST API call.
    searchTags = () => {

        // For each of the ten repositories saved, retrieve it's tag if it exists.
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

                this.setState(prevState => ({
                    results: [...prevState.results, obj]
                }));

            })
            .catch((error) => {

                this.setState(prevState => ({
                    results: [...prevState.results, obj]
                }));
            })
        });
    };


    render() {
        return (
            <div id="Grid">
                <div className="App">
                    <div id="Search-Grid">
                        <form id="Search">
                            <FormGroup
                                controlId="formBasicText"
                                id="form"
                            >
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    onChange={(e) => this.handleChange(e)}
                                    onKeyPress={(e) => this.handleKeyPress(e)}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                        <Button id="Search-Button" onClick={this.search}>Search</Button>
                    </div>
                    <Columns input={this.state.results} action={this.state.addRepo.bind(this)}/>
                </div>
                <Favorites favorites={this.state.favorites} remove={this.state.removeRepo.bind(this)}/>
            </div>
        );
    }
}
