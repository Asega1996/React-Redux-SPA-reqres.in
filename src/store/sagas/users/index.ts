import { takeLatest } from "redux-saga/effects";
import { getType } from "deox";
import { fetchListUsers } from "./fetchListUsers";
import { usersActions } from "store/reducers/users";

export const usersSagas = [
  takeLatest(getType(usersActions.request), fetchListUsers),
];
