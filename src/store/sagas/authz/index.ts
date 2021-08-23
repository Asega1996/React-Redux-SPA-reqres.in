import { takeLatest } from "redux-saga/effects";
import { getType } from "deox";
import { authzActions } from "store/reducers/authz";
import { fetchLoginSaga } from "./fetchLogin";

export const authzSagas = [
  takeLatest(getType(authzActions.request), fetchLoginSaga),
];
