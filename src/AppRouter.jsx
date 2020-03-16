import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from 'Pages/Main';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/go" component={MainContainer} />
    </Switch>
  );
}


export default AppRouter;