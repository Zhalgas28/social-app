import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Routes, Route } from "react-router-dom";

export const addNewPostActionCreator = (text) => {
  return {
    type: "ADD-NEW-POST",
    text,
  };
};

export const addNewMessageActionCreator = (text) => {
  return {
    type: "ADD-NEW-MESSAGE",
    text,
  };
};

function App() {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  const store = {
    _state: {
      profilePage: {
        posts: posts,
      },
      messagesPage: {
        messages: messages,
      },
    },

    getState() {
      return this._state;
    },

    dispatch(action) {
      if (action.type === "ADD-NEW-POST") {
        const newPost = {
          id: uuidv4(),
          text: action.text,
        };
        setPosts([...posts, newPost]);
      }

      if (action.type === "ADD-NEW-MESSAGE") {
        const newMessage = {
          id: uuidv4(),
          userId: 1,
          text: action.text,
        };
        setMessages([...messages, newMessage]);
      }
    },
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={store.getState().profilePage}
                dispatch={store.dispatch.bind(store)}
              />
            }
          />
          <Route
            path="/messages"
            element={
              <Messages
                state={store.getState().messagesPage}
                dispatch={store.dispatch.bind(store)}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
