import idolData from "./idol.data";
import IdolTypeActions from "./idol.type";
const idolReducer = (state = idolData, action) => {
  switch (action.type) {
    case IdolTypeActions.CHANGE_IMAGE_SIZE:
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return state;
  }
};

export default idolReducer;
