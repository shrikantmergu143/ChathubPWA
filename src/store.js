// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ThemeReducers from "./moduls/redux/reducers";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const initialState = {};

const persistConfig = {
  key: "chathub-store",
  storage
};

const middleware = [thunk];

const rootReducer = combineReducers({
  themeState: ThemeReducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store;
