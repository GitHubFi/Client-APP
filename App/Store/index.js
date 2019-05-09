import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {AsyncStorage} from 'react-native'
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from "./Reducer/AuthReducer";
import appReducer from "./Reducer/AppReducer";

import AuthEpic from "./Epics/Auth";
import AppEpic from "./Epics/App";
// const persistedState = loadState();
const loggerMiddleware = createLogger();
// Application Reducers
const rootReducer = combineReducers({
  authReducer,
  appReducer
});

const persistConfig = {
  key:'root',
  storage:AsyncStorage
}
export const rootEpic = combineEpics(
  AuthEpic.loginEpic,
  AuthEpic.verifylogin,
  AppEpic.createEpic,
  AppEpic.profileEpic

  // more epics functions go here
);

const epicMiddleware = createEpicMiddleware(rootEpic);
const persistedReducer = persistReducer(persistConfig,rootReducer)
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
);

 export let store = createStore(persistedReducer, createStoreWithMiddleware);
export  let persistor = persistStore(store)