import { call, put } from "redux-saga/effects";
import { postLoginService } from "services/authz";
import { authzActions } from "store/reducers/authz";

export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof authzActions.request>) {
  try {
    const response = yield call(postLoginService, payload);
    if (response.status === 200) {
      yield put(authzActions.success(response.data));
    } else {
      yield put(authzActions.error());
    }
  } catch (e) {
    yield put(authzActions.error());
  }
}
