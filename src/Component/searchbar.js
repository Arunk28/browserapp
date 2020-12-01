import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "Mookuthi amman" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFromSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          <div className="field">
            <label> Video Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
