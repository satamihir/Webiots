import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Landing from './scenes/landing/Landing';

const Routes = () => (
  <Router
    history={createBrowserHistory()}
  >
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
