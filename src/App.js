import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
