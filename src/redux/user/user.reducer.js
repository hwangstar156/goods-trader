import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isFetching: true,
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REFRESH_USER_START:
    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.REFRESH_USER_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isFetching: false,
        isLoggedIn: true,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isFetching: false,
        isLoggedIn: false,
      };
    case UserActionTypes.REFRESH_USER_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
