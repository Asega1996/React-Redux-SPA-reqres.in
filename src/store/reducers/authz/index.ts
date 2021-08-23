import { createAction, createReducer } from "deox";
import { withNamespace } from "utils/pipes";
import { always, evolve } from "ramda";
import { ILoginForm } from "types/forms/login";

const config = {
  prefix: "_",
  namespace: "AUTHZ",
};

// Default State type definition
type DefaultState = {
  token: string | null;
  fetching: boolean;
  error: boolean;
  errorMsg: string;
  success: boolean;
};

const defaultState: DefaultState = {
  token: null,
  fetching: false,
  success: false,
  error: false,
  errorMsg: "",
};

// Actions definition
export const authzActions = {
  request: createAction(
    withNamespace("REQUEST", config),
    (resolve) => (credentials: ILoginForm) => resolve(credentials)
  ),
  success: createAction(
    withNamespace("SUCCESS", config),
    (resolve) =>
      ({ token }: { token: string }) =>
        resolve({ token })
  ),
  error: createAction(withNamespace("ERROR", config)),
  reset: createAction(withNamespace("RESET", config)),
};

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
  handleAction(authzActions.request, (state) =>
    evolve(
      {
        success: always(false),
        error: always(false),
        fetching: always(true),
      },
      state
    )
  ),
  handleAction(authzActions.success, (state, { payload }) =>
    evolve(
      {
        success: always(true),
        error: always(false),
        fetching: always(false),
        token: always(payload.token),
      },
      state
    )
  ),
  handleAction(authzActions.error, (state) =>
    evolve(
      {
        fetching: always(false),
        success: always(false),
        error: always(true),
        token: always(null),
        errorMesage: always("Error en el inicio de sesión"),
      },
      state
    )
  ),
  handleAction(authzActions.reset, (state) => defaultState),
]);
