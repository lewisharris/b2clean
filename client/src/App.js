import "./App.css";
import React from "react";
import Services from "./Services";
import Covid from "./Covid";
import Home from "./Home";
import Sectors from "./Sectors";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"></Link>
          <Link to="/services">Services</Link>
          <Link to="/covid">COVID19</Link>
          <Link to="/sectors">Sectors</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/covid">
          <Covid />
        </Route>
        <Route path="/sectors">
          <Sectors />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
