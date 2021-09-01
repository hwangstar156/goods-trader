import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { UserActionTypes } from "./user.types";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.action";
