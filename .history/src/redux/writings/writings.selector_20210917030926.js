import { createSelector } from "reselect";

const selectWriting = (state) => state.writing;

export const selectWritingFetching = createSelector(
  [selectWriting],
  (writing) => writing.isFetching
);

export const selectCurentWriting = createSelector(
  [selectWriting],
  (writing) => writing.writings
);
