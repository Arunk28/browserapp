//import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Component/searchbar';
import React, { Component } from 'react';
class App extends Component {
    state = {  }
    onTermSubmit = (term)=>{
        console.log(term);
    }
    render() { 
        return ( <div> <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar></div> );
    }
}
 
export default App;

 
ReactDOM.render(<App />, document.querySelector('#root'))