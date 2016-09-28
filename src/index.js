import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import useScroll from 'react-router-scroll/lib/useScroll';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import 'normalize.css';
import reducers from './reducers';
import routes from './routes';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </Provider>
  , document.getElementById('root')
);
