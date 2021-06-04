import React, { Component } from "react";
import Preloader from "./Preloader";
import Header from "./Header";

class App extends Component {

  render() {

    var appStyle = {
      color: "#FFDE00"
    }

    return (
      <div className="App" style={appStyle}>
        {/* Page preloader: just for visual effects... for now */}
        {/* <Preloader/> */}
        <Header/>
      </div>
    );
  }
}

export default App