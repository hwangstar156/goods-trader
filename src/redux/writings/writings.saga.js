import { takeLatest, put, all, call } from "redux-saga/effects";
import WritingActionTypes from "./writings.types";
import { firestore } from "../../firebase/firebase.utils";
import {
  fetchWritingSuccess,
  fetchWritingFailure,
  addWritingFailure,
  deleteWritingFailure,
} from "./wirtings.action.js";

export function* fetchWritingData() {
  try {
    let data = [];
    yield firestore
      .collection("writings")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => data.push(doc.data()));
      });
    data = data.sort((a, b) => a.createAt - b.createAt);
    yield put(fetchWritingSuccess(data));
  } catch (err) {
    yield put(fetchWritingFailure(err));
  }
}

export function* addWritings({ payload: { writing, id } }) {
  try {
    yield firestore.collection("writings").doc(id).set(writing);
    yield fetchWritingData();
  } catch (err) {
    yield put(addWritingFailure(err));
  }
}

export function* deleteWriting(id) {
  try {
    yield firestore.collection("writings").doc(id).delete();
    yield fetchWritingData();
  } catch (err) {
    yield put(deleteWritingFailure(err));
  }
}

export function* onAddWritings() {
  yield takeLatest(WritingActionTypes.addWritingStart, addWritings);
}

export function* onDeleteWritings() {
  yield takeLatest(WritingActionTypes.deleteWritingStart, deleteWriting);
}

export function* onfetchWritingData() {
  yield takeLatest(WritingActionTypes.fetchWritingStart, fetchWritingData);
}

export function* writingSagas() {
  yield all([
    call(onAddWritings),
    call(onDeleteWritings),
    call(onfetchWritingData),
  ]);
}
