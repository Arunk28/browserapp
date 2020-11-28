import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Component/searchbar';


const App = () => {
    return ( <div> <SearchBar></SearchBar></div> );
}
 
ReactDOM.render(<App />, document.querySelector('#root'))