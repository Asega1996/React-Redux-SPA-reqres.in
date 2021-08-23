import { combineReducers } from "redux";
import authzReducer from "./authz";
import usersReducer from "./users";

export const rootReducer = combineReducers({
  authz: authzReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
