//import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./Component/searchbar";
import React, { Component } from "react";
import youtube from "./api/youtube";
import VideoList from "./Component/VideoLists";
import VideoDetail from "./Component/VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList vi={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
