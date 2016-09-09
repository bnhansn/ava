import {
  FETCH_ACCOUNT_START,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_ERROR,
} from './constants';
import ekto from '../../middleware/ekto';

export function fetchAccount() {
  return dispatch => {
    dispatch({ type: FETCH_ACCOUNT_START });
    ekto.fetch('/')
      .then(response => {
        dispatch({ type: FETCH_ACCOUNT_SUCCESS, payload: response });
      })
      .catch(() => {
        dispatch({ type: FETCH_ACCOUNT_ERROR });
      });
  };
}
