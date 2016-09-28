import {
  FETCH_ACCOUNT_PENDING,
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
} from './constants';

const initialState = {
  account: {},
  readyState: FETCH_ACCOUNT_PENDING,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_REQUEST:
      return {
        ...state,
        readyState: FETCH_ACCOUNT_REQUEST,
      };
    case FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        readyState: FETCH_ACCOUNT_SUCCESS,
        account: action.response.data,
      };
    case FETCH_ACCOUNT_FAILURE:
      return {
        ...state,
        readyState: FETCH_ACCOUNT_FAILURE,
      };
    default:
      return state;
  }
}
