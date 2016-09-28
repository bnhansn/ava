import { combineReducers } from 'redux';
import app from './containers/App/reducer';
import post from './containers/Post/reducer';
import posts from './containers/Home/reducer';

const reducers = combineReducers({
  app,
  post,
  posts,
});

export default reducers;
