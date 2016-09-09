import {
  FETCH_ACCOUNT_START,
  FETCH_ACCOUNT_ERROR,
  FETCH_ACCOUNT_SUCCESS,
} from './constants';

const initialState = {
  account: {},
  isLoadingAccount: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_START:
      return {
        ...state,
        isLoadingAccount: true,
      };
    case FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoadingAccount: false,
        account: action.payload.data,
      };
    case FETCH_ACCOUNT_ERROR:
      return {
        ...state,
        isLoadingAccount: false,
      };
    default:
      return state;
  }
}
