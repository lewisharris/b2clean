import "./App.css";
import React from "react";
import Services from "./Services";
import Covid from "./Covid";
import Contact from "./Contact";
import {
  Router as BrowserRouter,
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./layout/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/covid">
          <Covid />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
