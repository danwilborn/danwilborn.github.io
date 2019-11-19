import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Donate from '../donate/Donate';
import About from '../about/About';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import News from '../news/News';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 75px;

  @media only screen and (max-width: 700px) {
    margin-top: 40px;
}
`

function App() {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Switch>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
