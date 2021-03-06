import WritingActionTypes from "./writings.types";

const INITIAL_STATE = {
  isFetching: false,
  writings: [],
  error: null,
  fetchCount: 0,
};

const writingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WritingActionTypes.addWritingStart:
    case WritingActionTypes.deleteWritingStart:
    case WritingActionTypes.fetchWritingStart:
      return {
        ...state,
        isFetching: true,
        error: null,
        fetchCount: state.fetchCount + 1,
      };
    case WritingActionTypes.fetchWritingSuccess:
      return {
        ...state,
        isFetching: false,
        writings: action.payload,
        error: null,
      };
    case WritingActionTypes.addWritingFailure:
    case WritingActionTypes.deleteWritingFailure:
    case WritingActionTypes.fetchWritingFailure:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default writingReducer;
