import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout';
import Album from 'containers/album';
import Index from 'containers/index';
import { getSessionStorage, setSessionStorage } from 'helpers';

export default () => {
  if (!getSessionStorage('client')) {
    setSessionStorage('client', process.env.REACT_APP_IMGUR_CLIENT_ID);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout(Index)} />
        <Route exact path="/*" component={Layout(Album)} />
      </Switch>
    </BrowserRouter>
  );
};
