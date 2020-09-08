import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import BaseComponent from "./BaseComponent";
import Footer from "./Footer";
import Header from "./Header";
import { appRoutes } from "../routes";

import "./../App.css";


class App extends BaseComponent {
  routes = appRoutes

  render () {
    return (
      <Router>
        <Header/>
        <div className="container">
          { this.renderRoutes() }
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;