import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: "",
  };

  onSearchSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui field raised segment">
          <form onSubmit={this.onSearchSubmit} className="ui form">
            <input
              type="text"
              placeholder="Search here..."
              value={this.state.inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
            />
            <input
              className="ui button blue"
              type="submit"
              value="Submit"
              style={{ marginTop: "10px" }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
