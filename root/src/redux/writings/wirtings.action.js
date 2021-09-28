import WritingActionTypes from "./writings.types";

export const fetchWritingStart = () => ({
  type: WritingActionTypes.fetchWritingStart,
});

export const fetchWritingSuccess = (writings) => ({
  type: WritingActionTypes.fetchWritingSuccess,
  payload: writings,
});

export const fetchWritingFailure = (err) => ({
  type: WritingActionTypes.fetchWritingFailure,
  payload: err,
});

export const addWritingStart = (writing, id) => ({
  type: WritingActionTypes.addWritingStart,
  payload: { writing, id },
});

export const addWritingSuccess = () => ({
  type: WritingActionTypes.addWritingSuccess,
});

export const addWritingFailure = (err) => ({
  type: WritingActionTypes.addWritingFailure,
  payload: err,
});

export const deleteWritingStart = (id) => ({
  type: WritingActionTypes.deleteWritingStart,
  payload: id,
});

export const deleteWritingSuccess = () => ({
  type: WritingActionTypes.deleteWritingSuccess,
});

export const deleteWritingFailure = (err) => ({
  type: WritingActionTypes.deleteWritingFailure,
  payload: err,
});
