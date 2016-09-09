import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import homeReducer from './containers/Home/reducer';
import postReducer from './containers/Post/reducer';

const reducers = combineReducers({
  app: appReducer,
  home: homeReducer,
  post: postReducer,
});

export default reducers;
