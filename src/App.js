import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
