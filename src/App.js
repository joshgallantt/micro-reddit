import React from "react";
import "./App.css";
import NavBar from "./features/NavBar/NavBar.jsx";
import Filter from "./features/Filter/Filter";
import Post from "./features/Post/Post";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filter />
      <Post />
    </div>
  );
}

export default App;
