import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import MainView from "../MainView/MainView";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="content content-root">
        <Header />
        <MainView />
        <Footer />
      </div>
    );
  }
}

export default App;
