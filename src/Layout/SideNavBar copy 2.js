import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const List_Item = [
  {
    name: "DashBoard",
    path: "/",
  },
  {
    name: "User",
    path: "/user",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Login",
    path: "/login",
  },
];

function SideNavBar() {
  const [drawerWidth, setDrawerWidth] = useState("");
  const [drawerCollapse, setdrawerCollapse] = useState(false);

  const changeDrawerWidth = (newWidth) => {
    setDrawerWidth(newWidth);
    console.log(newWidth);
    document.documentElement.style.setProperty("--drawer-width", newWidth);
    setdrawerCollapse(true);
  };

  return (
    <>
      <div className={`drawer ${drawerCollapse ? "drawer-collapsed" : ""}`}>
        <ul className="drawer-list">
          <li
            style={{
              marginTop: "55px",
              marginLeft: "160px",
              alignSelf: "flex-end",
            }}>
            <Box component="span">
              <IconButton
                sx={{
                  textAlign: "center",
                }}
                onClick={() => changeDrawerWidth("6%")}>
                <ArrowBackIosIcon
                  sx={{
                    fontSize: "15px",
                    // background: "#b3a9ff",
                    padding: "5px",
                    // textAlign: "center",
                    borderRadius: "50px",
                    border: "1px solid ",
                  }}
                />
              </IconButton>
            </Box>
          </li>
          {List_Item.map((val, index) => (
            <>
              <li>
                <Box component="span">
                  <InboxIcon />
                </Box>
                <Link to={val.path}>{val.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideNavBar;
