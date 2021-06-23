/* eslint-disable import/extensions */

import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Posts from './Pages/Posts';
import Home from './Pages/Home';

const Router = () => (
  <div>
    <div className="router-section">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default Router;
