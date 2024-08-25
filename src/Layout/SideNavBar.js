import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { alpha, styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import Navbar from "../Components/Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <AppBar position="fixed" open={open}>
        <Navbar />
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <List
          sx={{
            padding: "0 5px",
          }}>
          {List_Item.map((val, index) => (
            <>
              {/* <ListItem key={val.name} disablePadding sx={{ display: "block" }}> */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  margin: "10px 0",
                  borderRadius: "10px",
                  ...(val.path == pathname && {
                    color: "primary.main",
                    fontWeight: "fontWeightSemiBold",
                    bgcolor: (theme) => alpha("#8676ff", 0.2),
                    "&:hover": {
                      bgcolor: (theme) => alpha("#8676ff", 0.2),
                    },
                  }),
                }}
                component={Link}
                to={val.path}>
                <Box component="span">
                  <InboxIcon />
                </Box>

                <ListItemText
                  primary={val.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              {/* </ListItem> */}
            </>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideNavBar;
