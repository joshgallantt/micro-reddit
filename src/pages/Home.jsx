import React from "react";
import Filter from "../features/Filter/Filter";
import PostList from "../features/PostList/PostList";

export default function Home() {
  return (
    <>
      <Filter />
      <PostList></PostList>
    </>
  );
}
