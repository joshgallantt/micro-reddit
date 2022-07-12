import React from "react";
import NavBar from "../features/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}
