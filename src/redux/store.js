import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [],
    },
    messagesPage: {
      messages: [],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("The subscriber was called");
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

		this._callSubscriber(this._state)
  },
};

export default store;
