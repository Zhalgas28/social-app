import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
					<Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
