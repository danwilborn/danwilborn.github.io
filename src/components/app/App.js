import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Donate from '../donate/Donate';
import About from '../about/About';
import Home from '../home/Home';
import styled from "styled-components/macro";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
