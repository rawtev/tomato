import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RestaurantClick from './Components/RestaurantClick';
import { Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path={`/rest`}><RestaurantClick /> </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
