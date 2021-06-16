import React, { Component } from "react";
import Header from "./Header";
/* import Preloader from "./Preloader"; */

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