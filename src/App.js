import "./App.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";

const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer"));
const MyProfileContainer = lazy(() =>
  import("./components/MyProfile/MyProfileContainer"));
const MessagesContainer = lazy(() =>
  import("./components/Messages/MessagesContainer"));
const UsersContainer = lazy(() =>
  import("./components/Users/UsersContainer"));
const Login = lazy(() =>
  import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile" element={<MyProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/messages" element={<MessagesContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
