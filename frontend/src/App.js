// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Home></Home>
        <Skills />
        {/* <Education></Education> */}
        <Experience></Experience>
        <Projects />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
