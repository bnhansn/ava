import {
  FETCH_POST_START,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
} from './constants';

const initialState = {
  post: {},
  isLoadingPost: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_START:
      return {
        ...state,
        post: {},
        isLoadingPost: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.data,
        isLoadingPost: false,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        post: {},
        isLoadingPost: false,
      };
    default:
      return state;
  }
}
