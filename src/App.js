import "./App.css";
import React from "react";
import Services from "./Services";
import Covid from "./Covid";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router basename={process.env.public_URL}>
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/covid">
          <Covid />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
