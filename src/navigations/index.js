import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout}/>
    </Switch>
  </BrowserRouter>
);
