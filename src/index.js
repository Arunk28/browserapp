//import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./Component/searchbar";
import React, { Component } from "react";
import youtube from "./api/youtube";
import VideoList from "./Component/VideoLists";
class App extends Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    console.log( response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>        
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <VideoList vi = {this.state.videos} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
