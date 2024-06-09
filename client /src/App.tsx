import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/landing";
import Auth from "./components/auth";
import Home from "./components/home";
import Settings from "./components/settings";
import Profile from "./components/profile";
import Security from "./components/security";
import Appearance from "./components/appearance";
import Privacy from "./components/privacy";
import Account from "./components/account";
import Chatbox from "./components/chatbox";
import AddFriends from "./components/addfriends";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addfriends" element={<AddFriends />} />
        <Route path="/main/*" element={<Home />}>
          <Route path="settings" element={<Settings />} />
          <Route path="settings/profile" element={<Profile />} />
          <Route path="settings/security" element={<Security />} />
          <Route path="settings/privacy" element={<Privacy />} />
          <Route path="settings/appearance" element={<Appearance />} />
          <Route path="settings/account" element={<Account />} />
          <Route path="chatbox" element={<Chatbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
