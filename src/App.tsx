import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/dialogs" Component={Dialogs} />
          <Route path="/profile" Component={Profile} />
          <Route path="/music" Component={Music} />
          <Route path="/news" Component={News} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
