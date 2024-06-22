import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    // if (e) {
    //   this.setState({ inputValue: e.target.value });
    // }

    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
