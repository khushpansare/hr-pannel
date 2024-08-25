import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Layout/SideNavBar";
import Navbar from "../Components/Navbar";

function DashBoard() {
  return (
    <div>
      {/* <Navbar /> */}
      <SideNavBar />
      <main>{/* <Outlet /> */}</main>
    </div>
  );
}

export default DashBoard;
