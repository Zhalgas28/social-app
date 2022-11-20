import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Routes, Route } from "react-router-dom";


function App({ store }) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile store={store} />}
          />
          <Route
            path="/messages"
            element={
              <MessagesContainer store={store} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
