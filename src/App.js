import React from "react";
import "./App.css";
import NavBar from "./features/NavBar/NavBar.jsx";
import Filter from "./features/Filter/Filter";
import PostList from "./features/PostList/PostList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filter />
      <PostList />
    </div>
  );
}

export default App;
