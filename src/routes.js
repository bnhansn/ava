import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Post from './containers/Post';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/blog/:slug" component={Post} />
    <Route path="*" component={NotFound} />
  </Route>
);
