import React from "react";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Siderbar from "./components/Siderbar";
import Widgets from "./components/Widgets";

import { Route, Routes } from "react-router";
import Profile from "./components/Profile";
import MyProfile from "./components/MyProfile";
const App = () => {
  const win = window.sessionStorage;
  if (!win.getItem("accessToken")) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* header */}
      <Navbar />
      <main className="flex">
        {/* sidebar */}
        <Siderbar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/user/:displayName" element={<Profile />} />
          <Route path="/user/Alozie" element={<MyProfile />} />
        </Routes>

        {/* widget */}
        <Widgets />
      </main>
    </div>
  );
};
export default App;
