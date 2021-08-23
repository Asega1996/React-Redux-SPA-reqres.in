// Redux imports
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Sagas imports
import createSagaMiddleware from "redux-saga";

// Components/Functions imports
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// Default config for persistor
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Run main saga whose contains the others sagas
sagaMiddleware.run(rootSaga);

// Store persistor configuration
const persistor = persistStore(store);

export default () => ({ persistor, store });
