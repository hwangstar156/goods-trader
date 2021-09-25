import { takeLatest, put, all, call } from "redux-saga/effects";
import WritingActionTypes from "./writings.types";
import { firestore } from "../../firebase/firebase.utils";
import {
  fetchWritingSuccess,
  fetchWritingFailure,
  addWritingFailure,
} from "./wirtings.action.js";

export function* fetchWritingData() {
  try {
    const data = [];
    yield firestore
      .collection("writings")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => data.push(doc.data()));
      });
  } catch (err) {
    yield put(fetchWritingFailure(err));
  }
}

export function* addWritings(writing) {
  try {
    yield firestore.collection("writings").add(writing);
  } catch (err) {
    yield put(addWritingFailure(err));
  }
}
