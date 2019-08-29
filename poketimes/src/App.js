import React, { Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Color from "./hoc/Color";
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className=" App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route path = '/:post_id' component={Post} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
