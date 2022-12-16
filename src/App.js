import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer"
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login"


function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <Navbar />
      <div className="content">
        <Routes>
					<Route path="/profile" element={<MyProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
					<Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
