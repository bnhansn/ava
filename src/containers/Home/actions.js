import ekto from '../../middleware/ekto';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_FAILURE,
} from './constants';

export function fetchPosts(params) {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    return ekto.fetch('/posts', params)
      .then((response) => {
        dispatch({ type: FETCH_POSTS_SUCCESS, response });
      })
      .catch(() => {
        dispatch({ type: FETCH_POSTS_FAILURE });
      });
  };
}

export function fetchMorePosts(params) {
  return (dispatch) => {
    dispatch({ type: FETCH_MORE_POSTS_REQUEST });
    return ekto.fetch('/posts', params)
      .then((response) => {
        dispatch({ type: FETCH_MORE_POSTS_SUCCESS, response });
      })
      .catch(() => {
        dispatch({ type: FETCH_MORE_POSTS_FAILURE });
      });
  };
}
