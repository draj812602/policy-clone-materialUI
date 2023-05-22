import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
//Icopns
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// image component
import Image from "next/image";

const pages = [
  {
    menuName: "My Dashboard",
    icon: <HomeIcon />,
  },
  {
    menuName: "Search",
    icon: <SearchIcon />,
  },
  {
    menuName: "New Quote",
    icon: <DriveFileRenameOutlineIcon />,
  },
  {
    menuName: "Add New Note",
    icon: <TextSnippetIcon />,
  },
  {
    menuName: "Save & Exit",
    icon: <PowerSettingsNewIcon />,
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ p: "0 !important" }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Image
            className="rounded-circle"
            src="/images/sapiens_main_logo_website.png"
            width={200}
            height={40}
            alt="Deeraj"
            priority={true}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: "flex" }}
          >
            <MenuIcon sx={{ marginRight: "auto" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map(({ menuName, icon }) => (
              <MenuItem key={menuName} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{menuName}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Image
            className="rounded-circle"
            src="/images/sapiens_main_logo_website.png"
            width={200}
            height={44}
            alt="Deeraj"
            priority={true}
          />
        </Box>

        <Box
          sx={{
            marginLeft: "auto",
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map(({ menuName, icon }) => (
            <Button
              key={menuName}
              onClick={handleCloseNavMenu}
              sx={{
                my: 0,
                mx: 1,
                color: "white",
              }}
            >
              <Box sx={{ mr: 0.5, mt: 0.8 }}>{icon}</Box>
              {menuName}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
