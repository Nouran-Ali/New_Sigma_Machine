import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getCookie, setCookie } from "cookies-next";
import { Select } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = [
  {
    title: "Home",
    title_ar: "الرئيسيه",
    href: "/",
  },
  {
    title: "About us",
    title_ar: "عنا",
    href: "/about",
  },
  {
    title: "Services",
    title_ar: "خدماتنا",
    href: "/services",
  },
  {
    title: "Products",
    title_ar: "المنتجات",
    href: "/products",
  },
  // {
  //   title: "Resources",
  //   title_ar: "المصادر",
  //   href: "/resources",
  // },
  {
    title: "The maintenance",
    title_ar: "المصادر",
    href: "/themaintenance",
  },
  {
    title: "Contact",
    title_ar: "تواصل معنا",
    href: "/contact",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElSubmenu, setAnchorElSubmenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const openSub = Boolean(anchorElSub);
  const handleClickSub = (event) => {
    setAnchorElSub(event.currentTarget);
  };
  const handleCloseSub = () => {
    setAnchorElSub(null);
  };

  const [anchorElSub2, setAnchorElSub2] = React.useState(null);
  const openSub2 = Boolean(anchorElSub2);
  const handleClickSub2 = (event) => {
    setAnchorElSub2(event.currentTarget);
  };
  const handleCloseSub2 = () => {
    setAnchorElSub2(null);
  };

  const [active, setActive] = useState();
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  const [t, i18n] = useTranslation();
  const { language, changeLanguage } = i18n;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActiveLink = (href) => {
    if (pathname == "/" && href == "/") {
      return true;
    } else if (pathname.includes(href) && href !== "/") {
      return true;
    } else {
      return false;
    }
  };

  const toggleLanguage = () => {
    if (language == "en") {
      changeLanguage("ar");
      setCookie("language", "ar");
    } else {
      changeLanguage("en");
      setCookie("language", "en");
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrolling ? "#ffffff" : "#fffff433",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: scrolling ? "0px 0px 5px rgba(0, 0, 0, 0.2)" : "none",
          zIndex: 1,
        }}
        className={`navbar pr-3 ${scrolling ? "pt-3 pb-3 max-lg:pt-1 max-lg:pb-1" : "pt-3 pb-3 max-lg:pt-1 max-lg:pb-1"}`}
        dir={language == "ar" ? "rtl" : "ltr"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={
                language == "ar"
                  ? {
                      mr: 15,
                      ml: 9,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }
                  : {
                      mr: 5,
                      ml: 9,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                      zIndex: "10",
                    }
              }
            >
              <img src="../logo.png" width="90px" className="max-lg:w-[50px]" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                textAlign: "center",
              }}
              className="ml-5"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
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
                {/* {pages.map(({ title, title_ar, href }, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      href={href}
                      className={`${styles.link} ${
                        handleActiveLink(href) ? styles.active : " "
                      } flex items-center font-bold`}
                    >
                      {i18n.language == "ar" ? title_ar : title}
                    </Link>
                  </MenuItem>
                ))} */}
                {pages.map(({ title, title_ar, href }, index) =>
                  title == "Products" ? (
                    <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="flex items-center text-[#304644] px-5 mr-3 ml-2 pt-3 font-bold normal-case text-base"
                      >
                        {i18n.language === "ar" ? "المنتجات" : "Products"}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={href}
                      style={{
                        marginRight: "15px",
                        color: "#304644",
                        textDecoration: "none",
                      }}
                      className="flex items-center text-[#304644] px-5 mr-3 ml-2 pt-3 font-bold normal-case text-base"
                    >
                      {i18n.language === "ar" ? title_ar : title}
                    </Link>
                  )
                )}
                <Button
                  onClick={toggleLanguage}
                  style={{
                    color: "#304644",
                    backgroundColor: "transparent",
                    fontWeight: "600",
                    // marginLeft: "44px",
                  }}
                  className="flex items-center text-[#304644] px-7 mr-3 pt-3 font-bold normal-case text-base"
                >
                  {language == "ar" ? "EN" : "AR"}
                </Button>

                {/* <div className='flex items-center ml-2'>
                                    <div className={styles.bg_icon}>
                                        <PhoneFilled />
                                    </div>
                                    <div className='ml-2'>
                                        <p>Call Us</p>
                                        <p>+0123 456 7894</p>
                                    </div>
                                </div> */}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                // ml: "auto",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                justifyContent: "flex-end",
              }}
            >
              <img src="../logo.png" width="75px" className="max-lg:w-[50px]"/>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                textAlign: "center",
              }}
            >
              {/* {pages.map(({ title, title_ar, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`${styles.link} ${
                    handleActiveLink(href) ? styles.active : " "
                  } flex items-center`}
                  style={{ align: "center" }}
                >
                  {i18n.language == "ar" ? title_ar : title}
                </Link>
              ))} */}
              {pages.map(({ title, title_ar, href }, index) =>
                title == "Products" ? (
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="flex items-center text-[#304644] mr-3 pt-3 font-bold normal-case text-base"
                    >
                      {i18n.language === "ar" ? "المنتجات" : "Products"}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={handleClickSub}
                        className="flex items-center justify-between"
                      >
                        CNC Router <ArrowForwardIosIcon className="text-sm" />{" "}
                      </MenuItem>
                      <Menu
                        id="sub-menu"
                        anchorEl={anchorElSub}
                        open={openSub}
                        onClose={handleCloseSub}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/1`}
                            className="no-underline text-inherit"
                          >
                            ATC CNC Router
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/2`}
                            className="no-underline text-inherit"
                          >
                            4 Axis CNC Router Machine
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/3`}
                            className="no-underline text-inherit"
                          >
                            CNC Aluminum Milling Machine
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/4`}
                            className="no-underline text-inherit"
                          >
                            CNC Wood Router
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/5`}
                            className="no-underline text-inherit"
                          >
                            5 Axis CNC Router Machine
                          </Link>
                        </MenuItem>
                      </Menu>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/6`}
                          className="no-underline text-inherit"
                        >
                          Fiber Laser Cutting Machine
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/7`}
                          className="no-underline text-inherit"
                        >
                          Co2 Laser Cutting Machine
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClickSub2}
                        className="flex items-center justify-between"
                      >
                        Laser Engraving Marking Machine{" "}
                        <ArrowForwardIosIcon className="text-sm ml-5" />
                      </MenuItem>
                      <Menu
                        id="sub2-menu"
                        anchorEl={anchorElSub2}
                        open={openSub2}
                        onClose={handleCloseSub2}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/8`}
                            className="no-underline text-inherit"
                          >
                            Fiber Laser Marking Machine
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/9`}
                            className="no-underline text-inherit"
                          >
                            UV Laser Marking Machine
                          </Link>
                        </MenuItem>
                      </Menu>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/10`}
                          className="no-underline text-inherit"
                        >
                          Laser Welding Machine
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/11`}
                          className="no-underline text-inherit"
                        >
                          CNC Plasma Cutting Machine
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/20`}
                          className="no-underline text-inherit"
                        >
                          Press Brake
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/21`}
                          className="no-underline text-inherit"
                        >
                          Shearing machine
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={href}
                    className={`${styles.link} ${
                      handleActiveLink(href) ? styles.active : " "
                    } flex items-center`}
                    style={{ align: "center" }}
                  >
                    {i18n.language === "ar" ? title_ar : title}
                  </Link>
                )
              )}
              <Button
                onClick={toggleLanguage}
                style={{
                  color: "#304644",
                  backgroundColor: "transparent",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
                // className="flex items-center text-[#304644] mr-3 ml-3 pt-3 font-bold normal-case text-base"
              >
                {language == "ar" ? "EN" : "AR"}
              </Button>
              <div className="flex items-center">
                <div className={styles.bg_icon}>
                  <PhoneFilled />
                </div>
                <div className="ml-3">
                  <p className="text-[#1c1c1c] text-left">Call Us</p>
                  <p className="text-[#54545f]">+966 56 974 5955</p>
                </div>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
