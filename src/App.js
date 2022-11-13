import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([])

	const store = {
		_state: {
			posts: posts
		},
		
		getState() {
			return this._state
		},

		addNewPost(text) {
			const newPost = {
				id: uuidv4(),
				text
			}
			setPosts([...posts, newPost])
		}
	}

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile state={store.getState()} addNewPost={store.addNewPost.bind(store)} />}
          />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
