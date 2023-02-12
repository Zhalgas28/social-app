import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer,
  app: appReducer
});

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export type InferActionsType<T> = T extends { [keys: string]: infer U } ? U : never


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
