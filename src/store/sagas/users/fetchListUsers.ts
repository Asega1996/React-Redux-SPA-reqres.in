import { call, put } from "redux-saga/effects";
import { getListUsers } from "services/users";
import { usersActions } from "store/reducers/users";

export function* fetchListUsers({
  payload,
}: ReturnType<typeof usersActions.request>) {
  try {
    const response = yield call(getListUsers, payload);
    if (response.status === 200) {
      yield put(usersActions.success(response.data));
    } else {
      yield put(usersActions.error());
    }
  } catch (e) {
    yield put(usersActions.error());
  }
}
