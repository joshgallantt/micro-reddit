import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./features/NavBar/NavBar.jsx";
import Filter from "./features/Filter/Filter";
import PostList from "./features/PostList/PostList";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Subreddit from "./pages/Subreddit";
import PostPage from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/posts/r/:sub/comments/:postId/:name"
              element={<PostPage />}
            />
            <Route path="/r/:subID" element={<Subreddit />}>
              <Route path="filter/:filter" element={<div>filter</div>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
