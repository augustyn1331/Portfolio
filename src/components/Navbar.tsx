import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import React, { useState} from "react";
import { Link as RouterLink} from "react-router-dom";
import logo from "../img/logo.png";
import menuicon from "../img/menu_outlined_icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const headersData = [
  {
    label: "O MNIE",
    href: "/Portfolio/AboutMe",
  },
  {
    label: "PROJEKTY",
    href: "/Portfolio/Projects",
  },
  {
    label: "KONTAKT",
    href: "/Portfolio/Contacts",
  },
];
const useStyles = makeStyles<Theme>((theme: Theme) => ({
  header: {
    zIndex: 2,
    background: theme.palette.primary.main,
    transition: "background 0.01s ease-in",
    willChange: "background",
  },
  drawer: {
    zIndex: 2,
    background: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
    transition: "background 0.01s ease-in",
    willChange: "background",
  },
  toolbarMobile: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.primary.main,
    transition: "background 0.3s ease-out",
    willChange: "background",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  logoclass: {
    boxSizing: "content-box",
    height: "53px",
    [theme.breakpoints.up("md")]: {
      height: "60px",
    },
  },
  logobutton: {
    marginLeft: "4px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "100px",
    },
  },
  noHover: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  morebutton: {
    width: "50px",
    padding: "0px 8px",
    boxSizing: "content-box",
  },
  moreicon: {
    fontSize: "55px",
    color:"#f4f7fa",
  },
  navLinks: {
    position: "relative",
    fontSize: "1.40rem",
    margin: "0rem 1rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "32px",
    },
    padding: "0px 2px",
    letterSpacing:"1px !important",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none !important",
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.primary.light,
    },
    transition: "color 0.3s ease-in-out",
    willChange: "color",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: "12px",
      height: "2px",
      width: "100%",
      WebkitTransformOrigin: "center top",
      transformOrigin: "center top",
      WebkitTransform: "scale(0, 1)",
      transform: "scale(0, 1)",
      transition:
        "color 0.1s, transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out",
    },
    "&::before, &:active::before": {
      backgroundColor: theme.palette.primary.dark,
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.primary.light,
      },
      willChange: "background-color",
    },
    "&:hover::before, &:focus::before": {
      WebkitTransformOrigin: "center top",
      transformOrigin: "center top",
      WebkitTransform: "scale(1, 1)",
      transform: "scale(1, 1)",
    },
  },
  wrapper: {
    display: "flex",
    marginTop: "0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: "0rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "64px",
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
  const handleDrawerOpen = () =>
    setDrawerOpen(true);

  const handleDrawerClose = () =>
    setDrawerOpen(false);

  const classes = useStyles();
  /* Display desktop Navbar */
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {myLogo()}
        <div className={classes.wrapper}>{getDesktopLinks()}</div>
      </Toolbar>
    );
  };
  /* Display mobile Navbar */
  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbarMobile}>
        {myLogo()}
        <IconButton className={classes.morebutton} onClick={handleDrawerOpen}>
      <img className={classes.moreicon} src={menuicon}/>
        </IconButton>

        <Drawer
          classes={{ paper: classes.drawer }}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };
   /* Mapping drawer links */
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          onClick={handleDrawerClose}
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: classes.navLinks,
          }}
          disableFocusRipple
          disableRipple
        >
          {label}
        </Button>
      );
    });
  };
  
  const myLogo = () => {
    return (
      <Button
        classes={{ label: classes.logobutton }}
        {...{
          to: "/Portfolio/",
          component: RouterLink,
          className: classes.noHover,
        }}
        disableFocusRipple
        disableRipple
      >
          <img className={classes.logoclass} src={logo} alt="car"/>
      </Button>
    );
  };

  /* Mapping desktop links */
  const getDesktopLinks = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: classes.navLinks,
          }}
          disableFocusRipple
          disableRipple
        >
          {label}
        </Button>
      );
    });
  };

 /* Slight shadow only on Mobile Navbar*/

  return (
      <AppBar className={classes.header} elevation={mobileView? 1:0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
  );
}
