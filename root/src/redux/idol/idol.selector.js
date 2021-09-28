import { createSelector } from "reselect";

const selectIdol = (state) => state.idol;

export const selectIdols = createSelector(
  [selectIdol],
  (idol) => idol.sections
);
