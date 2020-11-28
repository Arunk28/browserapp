
import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: "tesd" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearch}>
          <div className="field">
            <label> Video Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
