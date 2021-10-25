import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.saga";
import { writingSagas } from "./writings/writings.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(writingSagas)]);
}
