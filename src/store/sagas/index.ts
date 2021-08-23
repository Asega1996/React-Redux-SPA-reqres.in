import { all } from "redux-saga/effects";
import { authzSagas } from "./authz";
import { usersSagas } from "./users";

export default function* rootSaga() {
  yield all([...authzSagas, ...usersSagas]);
}
