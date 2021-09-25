import WritingActionTypes from "./writings.types";

const INITIAL_STATE = {
  isFetching: true,
  writings: [],
  error: null,
};

const writingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WritingActionTypes.addWritingStart:
    case WritingActionTypes.deleteWritingStart:
    case WritingActionTypes.fetchWritingStart:
      return {
        ...state,
        isFetching: true,
      };
    case WritingActionTypes.fetchWritingSuccess:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return {
        ...state,
      };
  }
};
