import ekto from '../../middleware/ekto';
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './constants';

export function fetchPost(slug) {
  console.log('fetchPost');
  console.log(slug);
  return dispatch => {
    dispatch({ type: FETCH_POST_REQUEST });
    return ekto.fetch(`/posts/${slug}`)
      .then(response => {
        dispatch({ type: FETCH_POST_SUCCESS, response });
      })
      .catch(() => {
        dispatch({ type: FETCH_POST_FAILURE });
      });
  };
}
