import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

const contentRouter = () => (
  <Switch>
    <Route exact path="/" component={PhotoGrid} />
    <Route path="/view/:postId" component={Single} />
  </Switch>
);

export default contentRouter;
