import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_FAILURE,
} from './constants';

const initialState = {
  readyState: FETCH_POSTS_PENDING,
  list: [],
  meta: {},
  isLoadingMorePosts: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        readyState: FETCH_POSTS_REQUEST,
        list: [],
        meta: {},
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        readyState: FETCH_POSTS_SUCCESS,
        list: action.response.data,
        meta: action.response.meta,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        readyState: FETCH_POSTS_FAILURE,
        list: [],
        meta: {},
      };
    case FETCH_MORE_POSTS_REQUEST:
      return {
        ...state,
        isLoadingMorePosts: true,
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          ...action.response.data,
        ],
        meta: action.response.meta,
        isLoadingMorePosts: false,
      };
    case FETCH_MORE_POSTS_FAILURE:
      return {
        ...state,
        isLoadingMorePosts: false,
      };
    default:
      return state;
  }
}
