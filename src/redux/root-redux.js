import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import idolReducer from "./idol/idol.reducer";
import userReducer from "./user/user.reducer";
import writingReducer from "./writings/writings.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  idol: idolReducer,
  writing: writingReducer,
});

export default persistReducer(persistConfig, rootReducer);
