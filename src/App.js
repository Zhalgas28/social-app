import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages"


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        {/* <Profile /> */}
				<Messages />
      </div>
    </div>
  );
}

export default App;
