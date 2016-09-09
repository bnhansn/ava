import {
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from './constants';
import ekto from '../../middleware/ekto';

export function fetchPost(slug) {
  return dispatch => {
    dispatch({ type: FETCH_POST_START });
    ekto.fetch(`/posts/${slug}`)
      .then(response => {
        dispatch({ type: FETCH_POST_SUCCESS, payload: response });
      })
      .catch(() => {
        dispatch({ type: FETCH_POST_ERROR });
      });
  };
}
