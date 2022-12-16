import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
