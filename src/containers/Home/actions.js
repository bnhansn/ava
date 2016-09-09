import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_MORE_POSTS_START,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_ERROR,
} from './constants';
import ekto from '../../middleware/ekto';

export function fetchPosts(params) {
  return dispatch => {
    dispatch({ type: FETCH_POSTS_START });
    ekto.fetch('/posts', params)
      .then(response => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response });
      })
      .catch(() => {
        dispatch({ type: FETCH_POSTS_ERROR });
      });
  };
}

export function fetchMorePosts(params) {
  return dispatch => {
    dispatch({ type: FETCH_MORE_POSTS_START });
    ekto.fetch('/posts', params)
      .then(response => {
        dispatch({ type: FETCH_MORE_POSTS_SUCCESS, payload: response });
      })
      .catch(() => {
        dispatch({ type: FETCH_MORE_POSTS_ERROR });
      });
  };
}
