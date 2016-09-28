import {
  FETCH_POST_PENDING,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './constants';

const initialState = {
  readyState: FETCH_POST_PENDING,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        readyState: FETCH_POST_REQUEST,
        data: {},
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        readyState: FETCH_POST_SUCCESS,
        data: action.response.data,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        readyState: FETCH_POST_FAILURE,
        data: {},
      };
    default:
      return state;
  }
}
