import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../img/logo.png";
import menuicon from "../img/menu_outlined_icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const headersData = [
  {
    label: "O MNIE",
    href: "AboutMe",
  },
  {
    label: "PROJEKTY",
    href: "Projects",
  },
  {
    label: "KONTAKT",
    href: "Contact",
  },
];

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  //Containers
  drawer: {
    zIndex: 2,
    background: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    flexDirection: "column",
    listStyleType:"none !important"
  },
  //Logo img and logo link
  logoImage: {
    boxSizing: "content-box",
    height: "60px",
    [theme.breakpoints.up("md")]: {
      height: "70px",
    },
  },
  logoLink: {
    marginLeft: "16px",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "62px !important",
    },
  },
  //Menu button
  menuButton: {
    width: "50px",
    padding: "0px 8px",
    boxSizing: "content-box",
    height: "62px !important",
  },
  menuIcon: {
    color: "rgba(244, 247, 250, 0.95)",
    height: "45px",
  },
  //Menu links
  navUl: {
    marginTop: "0px",
    flexDirection: "row",
    marginRight: "0rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "64px",
    },
    listStyleType:"none !important"
  },
  navList: {
    height: "76px",
    margin: "0rem 1rem",
  },
  navLink: {
    position: "relative",
    height: "100%",
    fontSize: "1.45rem",
    fontWeight: 300,
    letterSpacing: "0.9px",
    padding: "0px 2px",
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.primary.dark,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.primary.light,
    },
    
    "&::before": {
      content: "''",
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "0",
      height: "3px",
      backgroundColor: "#f86d70",
      transition: "transform 200ms ease-out",
      transform: "scaleX(0)",
      transformOrigin:"100% 50%"
    },
    "&.active::before": {
      transform: "scaleX(1)",
      transformOrigin:"0% 50%"
    },
  },
}));

export default function NavBar() {
  const theme = useTheme();
  /* useState to control drawer being opened*/
  const [drawerOpen, setDrawerOpen] = useState(false);
  /* Mobile View Query from Material UI*/
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  /*Open and Close drawer */
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const classes = useStyles();
  /* Display desktop Navbar */
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {myLogo()}
        <ul className={`${classes.navUl} ${classes.flexbox}`}>
          {getDesktopLinks()}
        </ul>
      </Toolbar>
    );
  };
  /* Display mobile Navbar */
  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {myLogo()}
        <IconButton className={classes.menuButton} onClick={handleDrawerOpen}>
          <img className={classes.menuIcon} src={menuicon} alt="more" />
        </IconButton>
        <Drawer
          classes={{ paper: classes.drawer }}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
         <ul className={`${classes.drawerContainer} ${classes.flexbox}`}>
            {getDrawerChoices()}
          </ul>
        </Drawer>
      </Toolbar>
    );
  };

  const myLogo = () => {
    return (
        <LinkScroll
          to={"Home"}
          smooth={true}
          duration={500}
          spy={true}
          offset={-76}
          exact="true"
          className={`${classes.logoLink} ${classes.flexbox}`}
        >
          <img className={classes.logoImage} src={logo} alt="car" />
        </LinkScroll>
    );
  };

  /* Mapping drawer links */
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <li
          key ={label}
          className={classes.navList}
      >
          <LinkScroll
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-61} //different offset for mobile nav
            exact="true"
            className={`${classes.navLink} ${classes.flexbox}`}
            onClick={handleDrawerClose}
          >
            {label}
          </LinkScroll>
        </li>
      );
    });
  };

  /* Mapping desktop links */
  const getDesktopLinks = () => {
    return headersData.map(({ label, href }) => {
      return (
        <li
          key ={label}
          className={classes.navList}
      >
        <LinkScroll
                to={href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-76}
                exact="true"
                className={`${classes.navLink} ${classes.flexbox}`}
        >
          {label}
        </LinkScroll>
      </li>
      );
    });
  };

  /* Slight shadow only on Mobile Navbar*/
  return (
    <AppBar
      data-aos="fade-down"
      data-aos-delay="100"
      elevation={mobileView ? 1 : 0}
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
