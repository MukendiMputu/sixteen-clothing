import React, { Component } from "react";
import Preloader from "./Preloader";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preloader/>
        <Header/>
      </div>
    );
  }
}

export default App