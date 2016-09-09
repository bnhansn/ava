import {
  FETCH_POSTS_START,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_MORE_POSTS_START,
  FETCH_MORE_POSTS_ERROR,
  FETCH_MORE_POSTS_SUCCESS,
} from './constants';

const initialState = {
  posts: [],
  meta: {},
  isLoadingPosts: false,
  isLoadingMorePosts: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        posts: [],
        meta: {},
        isLoadingPosts: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        meta: action.payload.meta,
        isLoadingPosts: false,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        meta: {},
        isLoadingPosts: false,
      };
    case FETCH_MORE_POSTS_START:
      return {
        ...state,
        isLoadingMorePosts: true,
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts,
          ...action.payload.data,
        ],
        meta: action.payload.meta,
        isLoadingMorePosts: false,
      };
    case FETCH_MORE_POSTS_ERROR:
      return {
        ...state,
        isLoadingMorePosts: false,
      };
    default:
      return state;
  }
}
