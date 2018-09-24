import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
      this.setState({value: e.target.value})
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
          <body>
            <div id="Grid">
                <Search/>
                <Favorites/>
            </div>
          </body>
      </div>
    );
  }
}

export default App;


{/*<div id="left-grid">*/}
    {/*<div id="search-grid">*/}
        {/*<form>*/}
            {/*<FormGroup*/}
                {/*controlId="formBasicText"*/}
            {/*>*/}
                {/*<FormControl*/}
                    {/*type="text"*/}
                    {/*value={this.state.value}*/}
                    {/*onChange={(e) => this.handleChange(e)}*/}
                {/*/>*/}
                {/*<FormControl.Feedback />*/}
            {/*</FormGroup>*/}
        {/*</form>*/}
        {/*<Button>Default</Button>*/}
    {/*</div>*/}
    {/*<Columns/>*/}
    {/*<div className="search-results">*/}

    {/*</div>*/}
{/*</div>*/}