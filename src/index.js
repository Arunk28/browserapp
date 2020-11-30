//import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./Component/searchbar";
import React, { Component } from "react";
import youtube from "./api/youtube";
class App extends Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>        
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        {this.state.videos.length} vidoes are theres
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
