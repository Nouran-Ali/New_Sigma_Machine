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
import { LeftOutlined, PhoneFilled, RightOutlined } from "@ant-design/icons";
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
    title: "Maintenance",
    title_ar: "الصيانة",
    href: "/themaintenance",
  },
  {
    title: "Contact",
    title_ar: "تواصل معنا",
    href: "/contact",
  },
];

function Navbar() {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

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
    setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
  };

  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const openSub = Boolean(anchorElSub);
  const handleClickSub = (event) => {
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
    setAnchorElSub(event.currentTarget);
  };
  const handleCloseSub = () => {
    setAnchorElSub(null);
  };

  const [anchorElSub2, setAnchorElSub2] = React.useState(null);
  const openSub2 = Boolean(anchorElSub2);
  const handleClickSub2 = (event) => {
    setAnchorElSub(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
    setAnchorElSub2(event.currentTarget);
  };
  const handleCloseSub2 = () => {
    setAnchorElSub2(null);
  };

  const [anchorElSub3, setAnchorElSub3] = React.useState(null);
  const openSub3 = Boolean(anchorElSub3);
  const handleClickSub3 = (event) => {
    // setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
    setAnchorElSub3(event.currentTarget);
  };
  const handleCloseSub3 = () => {
    setAnchorElSub3(null);
  };

  const [anchorElSub4, setAnchorElSub4] = React.useState(null);
  const openSub4 = Boolean(anchorElSub4);
  const handleClickSub4 = (event) => {
    // setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
    setAnchorElSub4(event.currentTarget);
  };
  const handleCloseSub4 = () => {
    setAnchorElSub4(null);
  };

  const [anchorElSub5, setAnchorElSub5] = React.useState(null);
  const openSub5 = Boolean(anchorElSub5);
  const handleClickSub5 = (event) => {
    setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub6(null);
    setAnchorElSub7(null);
    setAnchorElSub5(event.currentTarget);
  };
  const handleCloseSub5 = () => {
    setAnchorElSub5(null);
  };

  const [anchorElSub6, setAnchorElSub6] = React.useState(null);
  const openSub6 = Boolean(anchorElSub6);
  const handleClickSub6 = (event) => {
    setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub7(null);
    setAnchorElSub6(event.currentTarget);
  };
  const handleCloseSub6 = () => {
    setAnchorElSub6(null);
  };

  const [anchorElSub7, setAnchorElSub7] = React.useState(null);
  const openSub7 = Boolean(anchorElSub7);
  const handleClickSub7 = (event) => {
    setAnchorElSub(null);
    setAnchorElSub2(null);
    setAnchorElSub3(null);
    setAnchorElSub4(null);
    setAnchorElSub5(null);
    setAnchorElSub6(null);
    setAnchorElSub7(event.currentTarget);
  };
  const handleCloseSub7 = () => {
    setAnchorElSub7(null);
  };

  const [active, setActive] = useState();
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const { pathname } = router;

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

  // const toggleLanguage = () => {
  //   if (language === "en") {
  //     changeLanguage("ar");
  //     setCookie("language", "ar");
  //   } else {
  //     changeLanguage("en");
  //     setCookie("language", "en");
  //   }
  // };
  const toggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      setCookie("language", "ar");
    } else {
      i18n.changeLanguage("en");
      setCookie("language", "en");
    }
  };

  // useEffect(() => {
  //   const savedLang = getCookie("language");

  //   if (!savedLang) {
  //     changeLanguage("ar");
  //     setCookie("language", "ar");
  //   }
  // }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrolling ? "#ffffff" : "#fffff433",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: scrolling ? "0px 0px 5px rgba(0, 0, 0, 0.2)" : "none",
          zIndex: 999,
        }}
        className={`navbar pr-3 ${scrolling
          ? "pt-3 pb-3 max-lg:pt-1 max-lg:pb-1"
          : "pt-3 pb-3 max-lg:pt-1 max-lg:pb-1"
          }`}
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
                        className="flex items-center text-[#304644] pl-5 ml-2 pt-3 font-bold text-base"
                        sx={{
                          color: "rgb(48, 70, 68)",
                          marginRight: "15px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          padding: "7px 0px 0px 28px",
                          fontSize: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >

                      {
                          language === "ar" && <LeftOutlined className="mr-2" sx={{ fontSize: "17px", color: "#1c1c1c", }} />
                        }

                        {i18n.language === "ar" ? "المنتجات" : "Products"}
                        {/* <ArrowForwardIosIcon
                          sx={{
                            fontSize: "17px",
                            color: "#1c1c1c",
                            // fontWeight: "600",
                            // padding: "13px 17px",
                            // textTransform: "capitalize",
                          }}
                          className="mx-4"
                        /> */}

                        {
                          language === "en" &&
                            <RightOutlined className="mx-4" sx={{ fontSize: "17px", color: "#1c1c1c", }} />
                        }
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
                      className="flex items-center max-lg:justify-end text-[#304644] px-5 mr-3 ml-2 max-lg:px-1 pt-3 font-bold normal-case text-base"
                    >
                      {i18n.language === "ar" ? title_ar : title}
                    </Link>
                  )
                )}
                <Button
                  onClick={toggleLanguage}
                  // style={{
                  //   color: "#304644",
                  //   backgroundColor: "transparent",
                  //   fontWeight: "600",
                  //   // marginLeft: "44px",
                  // }}

                  sx={{
                    color: "rgb(48, 70, 68)",
                    marginRight: "15px",
                    fontWeight: "700",
                    padding: "7px 28px 0px 28px",
                    fontSize: "16px",
                  }}
                  className="flex items-center max-lg:justify-end text-[#304644] px-7 max-lg:px-0 max-lg:mx-auto mr-3 pt-3 font-bold normal-case text-base"
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
              <img src="../logo.png" width="75px" className="max-lg:w-[50px]" />
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
                      sx={{
                        fontSize: "17px",
                        color: "#1c1c1c",
                        fontWeight: "600",
                        padding: "13px 17px",
                        textTransform: "capitalize",
                      }}
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

                      sx={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                      }}
                    >
                      <MenuItem
                        onClick={handleClickSub}
                        className="flex items-center justify-between"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t("cnc_router_machines")}

                        {
                          language === "en" ?
                            <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                            <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                        }

                      </MenuItem>
                      <Menu
                        id="sub-menu"
                        anchorEl={anchorElSub}
                        open={openSub}
                        onClose={handleCloseSub}
                        keepMounted={false}
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
                            {t("cnc_3_axis")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/2`}
                            className="no-underline text-inherit"
                          >
                            {t("cnc_4_axis")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/3`}
                            className="no-underline text-inherit"
                          >
                            {t("cnc_5_axis")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/4`}
                            className="no-underline text-inherit"
                          >
                            {t("cnc_rotary_axis")}
                          </Link>
                        </MenuItem>

                        <MenuItem
                          onClick={handleClickSub3}
                          className="flex items-center justify-between"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {t("atc_cnc_router")}
                          {
                            language === "en" ?
                              <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                              <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                          }
                        </MenuItem>
                        <Menu
                          id="sub-menu3"
                          anchorEl={anchorElSub3}
                          open={openSub3}
                          onClose={handleCloseSub3}
                          keepMounted={false}
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
                              href={`/products/5`}
                              className="no-underline text-inherit"
                            >
                              {t("atc_3_axis")}
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              href={`/products/6`}
                              className="no-underline text-inherit"
                            >
                              {t("atc_4_axis")}
                            </Link>
                          </MenuItem>
                        </Menu>

                        <MenuItem
                          onClick={handleClickSub4}
                          className="flex items-center justify-between"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {t("multi_head_router")}
                          {
                            language === "en" ?
                              <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                              <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                          }
                        </MenuItem>
                        <Menu
                          id="sub-menu4"
                          anchorEl={anchorElSub4}
                          open={openSub4}
                          onClose={handleCloseSub4}
                          keepMounted={false}
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
                              href={`/products/7`}
                              className="no-underline text-inherit"
                            >
                              {t("multi_spindle_router")}
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              href={`/products/8`}
                              className="no-underline text-inherit"
                            >
                              {t("multi_process_router")}
                            </Link>
                          </MenuItem>
                        </Menu>

                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/9`}
                            className="no-underline text-inherit"
                          >
                            {t("stone_cnc")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/10`}
                            className="no-underline text-inherit"
                          >
                            {t("aluminum_cnc")}
                          </Link>
                        </MenuItem>
                      </Menu>


                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/11`}
                          className="no-underline text-inherit"
                        >
                          {t("co2_laser")}
                        </Link>
                      </MenuItem>

                      <MenuItem
                        onClick={handleClickSub2}
                        className="flex items-center justify-between"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t("fiber_laser_cutting")}
                        {
                          language === "en" ?
                            <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                            <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                        }
                      </MenuItem>
                      <Menu
                        id="sub2-menu"
                        anchorEl={anchorElSub2}
                        open={openSub2}
                        onClose={handleCloseSub2}
                        keepMounted={false}
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
                            href={`/products/12`}
                            className="no-underline text-inherit"
                          >
                            {t("sheet_fiber_laser")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/13`}
                            className="no-underline text-inherit"
                          >
                            {t("tube_fiber_laser")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/14`}
                            className="no-underline text-inherit"
                          >
                            {t("tube_sheet_fiber_laser")}
                          </Link>
                        </MenuItem>
                      </Menu>

                      <MenuItem
                        onClick={handleClickSub5}
                        className="flex items-center justify-between"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t("fiber_laser_welding")}
                        {
                          language === "en" ?
                            <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                            <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                        }
                      </MenuItem>
                      <Menu
                        id="sub5-menu"
                        anchorEl={anchorElSub5}
                        open={openSub5}
                        onClose={handleCloseSub5}
                        keepMounted={false}
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
                            href={`/products/15`}
                            className="no-underline text-inherit"
                          >
                            {t("handheld_welding")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/16`}
                            className="no-underline text-inherit"
                          >
                            {t("cnc_3axis_welding")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/17`}
                            className="no-underline text-inherit"
                          >
                            {t("spot_welding")}
                          </Link>
                        </MenuItem>
                      </Menu>

                      <MenuItem
                        onClick={handleClickSub6}
                        className="flex items-center justify-between"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t("laser_marking_machines")}
                        {
                          language === "en" ?
                            <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                            <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                        }
                      </MenuItem>
                      <Menu
                        id="sub6-menu"
                        anchorEl={anchorElSub6}
                        open={openSub6}
                        onClose={handleCloseSub6}
                        keepMounted={false}
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
                            href={`/products/18`}
                            className="no-underline text-inherit"
                          >
                            {t("co2_laser_marking")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/19`}
                            className="no-underline text-inherit"
                          >
                            {t("fiber_laser_marking")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/20`}
                            className="no-underline text-inherit"
                          >
                            {t("uv_laser_marking")}
                          </Link>
                        </MenuItem>
                      </Menu>

                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/21`}
                          className="no-underline text-inherit"
                        >
                          {t("plasma_cutting")}
                        </Link>
                      </MenuItem>

                      <MenuItem
                        onClick={handleClickSub7}
                        className="flex items-center justify-between"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t("press_brake_machines")}
                        {
                          language === "en" ?
                            <RightOutlined className="text-sm ml-5" sx={{ fontSize: "17px" }} /> :
                            <LeftOutlined className="text-sm mr-5" sx={{ fontSize: "17px" }} />
                        }
                      </MenuItem>
                      <Menu
                        id="sub7-menu"
                        anchorEl={anchorElSub7}
                        open={openSub7}
                        onClose={handleCloseSub7}
                        keepMounted={false}
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
                            href={`/products/22`}
                            className="no-underline text-inherit"
                          >
                            {t("cnc_press_brake")}
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href={`/products/23`}
                            className="no-underline text-inherit"
                          >
                            {t("nc_press_brake")}
                          </Link>
                        </MenuItem>
                      </Menu>

                      <MenuItem onClick={handleClose}>
                        <Link
                          href={`/products/24`}
                          className="no-underline text-inherit"
                        >
                          {t("shearing_machine")}
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={href}
                    className={`${styles.link} ${handleActiveLink(href) ? styles.active : " "
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
              >
                {language == "ar" ? "EN" : "AR"}
              </Button>
              <div className={`flex items-center ${language == "en" ? "lg:mx-4" : "lg:mx-10" } `} dir="ltr">
                <div className={styles.bg_icon}>
                  <PhoneFilled />
                </div>
                <div className="ml-3">
                  <p className="text-[#1c1c1c] text-left"> {t("Call Us")}</p>
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
