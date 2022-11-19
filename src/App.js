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

function App(props) {
	const { state, dispatch } = props;
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile state={state.profilePage} dispatch={dispatch} />}
          />
          <Route
            path="/messages"
            element={
              <Messages state={state.messagesPage} dispatch={dispatch} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
