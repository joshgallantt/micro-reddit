import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "../features/Filter/Filter";
import PostList from "../features/PostList/PostList";
import { useSelector } from "react-redux";

export default function Subreddit() {
  const currentSub = useSelector((state) => state.currentSub.currentSub);
  const filter = useSelector((state) => state.filterSelection.filter);

  return (
    <>
      <Filter />
      <h1>{currentSub + filter}</h1>
      <PostList></PostList>
      {/* <Outlet /> */}
    </>
  );
}
