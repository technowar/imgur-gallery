import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout';
import Index from 'containers/index';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout(Index)} />
    </Switch>
  </BrowserRouter>
);
