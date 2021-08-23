import { createAction, createReducer } from "deox";
import { withNamespace } from "utils/pipes";
import { always, evolve } from "ramda";
import { RequestUsers } from "types/request/user";

const config = {
  prefix: "_",
  namespace: "USERS",
};

// Default State type definition
type DefaultState = {
  requestUsers: RequestUsers | Object;
  fetching: boolean;
  error: boolean;
  errorMsg: string;
  success: boolean;
};

const defaultState: DefaultState = {
  requestUsers: {},
  fetching: false,
  success: false,
  error: false,
  errorMsg: "",
};

// Actions definition
export const usersActions = {
  request: createAction(
    withNamespace("REQUEST", config),
    (resolve) => (query: string) => resolve(query)
  ),
  success: createAction(
    withNamespace("SUCCESS", config),
    (resolve) => (response: { response: RequestUsers }) => resolve(response)
  ),
  error: createAction(withNamespace("ERROR", config)),
  reset: createAction(withNamespace("RESET", config)),
};

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
  handleAction(usersActions.request, (state) =>
    evolve(
      {
        success: always(false),
        error: always(false),
        fetching: always(true),
      },
      state
    )
  ),
  handleAction(usersActions.success, (state, { payload }) =>
    evolve(
      {
        success: always(true),
        error: always(false),
        fetching: always(false),
        requestUsers: always(payload),
      },
      state
    )
  ),
  handleAction(usersActions.error, (state) =>
    evolve(
      {
        fetching: always(false),
        success: always(false),
        error: always(true),
        token: always(null),
        errorMesage: always("Error al cargar usuarios"),
      },
      state
    )
  ),
  handleAction(usersActions.reset, (state) => defaultState),
]);
