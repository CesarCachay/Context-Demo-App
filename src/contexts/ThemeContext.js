import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      // <ThemeContext.Provider value={{ isDarkMode: this.state.dark }}>
      <ThemeContext.Provider
        value={{ ...this.state, handleTheme: this.handleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeProvider };
