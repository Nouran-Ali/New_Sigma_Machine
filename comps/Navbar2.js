import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "next/link";

const Navbar2 = () => {
  // Consolidated State
  const [menuState, setMenuState] = useState({
    navMenu: null,
    productsMenu: null,
    subMenu: null,
  });

  const [language, setLanguage] = useState("en");

  // Menu Handlers
  const handleOpenMenu = (event, menu) => {
    setMenuState((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  const handleCloseMenu = (menu) => {
    setMenuState((prev) => ({ ...prev, [menu]: null }));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", color: "#000" }}>
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link href="/">
              <img src="../logo.png" alt="Logo" width="90px" />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            <Button onClick={(e) => handleOpenMenu(e, "productsMenu")}>
              Products
            </Button>
            <Menu
              anchorEl={menuState.productsMenu}
              open={Boolean(menuState.productsMenu)}
              onClose={() => handleCloseMenu("productsMenu")}
            >
              <MenuItem onClick={(e) => handleOpenMenu(e, "subMenu")}>CNC Router</MenuItem>
              <Menu
                anchorEl={menuState.subMenu}
                open={Boolean(menuState.subMenu)}
                onClose={() => handleCloseMenu("subMenu")}
              >
                <MenuItem onClick={() => handleCloseMenu("subMenu")}>
                  ATC CNC Router
                </MenuItem>
                <MenuItem onClick={() => handleCloseMenu("subMenu")}>
                  CNC Wood Router
                </MenuItem>
              </Menu>
            </Menu>
            <Button component={Link} href="/about">
              About
            </Button>
            <Button component={Link} href="/contact">
              Contact
            </Button>
          </Box>

          {/* Language Toggle */}
          <Box sx={{ cursor: "pointer", marginLeft: "20px" }} onClick={toggleLanguage}>
            {language === "en" ? "AR" : "EN"}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={(e) => handleOpenMenu(e, "navMenu")}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuState.navMenu}
              open={Boolean(menuState.navMenu)}
              onClose={() => handleCloseMenu("navMenu")}
            >
              <MenuItem onClick={() => handleCloseMenu("navMenu")}>
                <Link href="/products">Products</Link>
              </MenuItem>
              <MenuItem onClick={() => handleCloseMenu("navMenu")}>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={() => handleCloseMenu("navMenu")}>
                <Link href="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={toggleLanguage}>
                {language === "en" ? "AR" : "EN"}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar2;