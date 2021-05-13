import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import Button from "@material-ui/core/Button";
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
  flexbox:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  },  
  wrapper: {
    marginTop: "0px",
    flexDirection: "row",
    marginRight: "0rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "64px",
    },
  },
  //logo styling
  logoImage: {
    boxSizing: "content-box",
    height: "50px",
    [theme.breakpoints.up("md")]: {
      height: "60px",
    },
  },  
  logoButton: {
    marginLeft: "4px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "100px",
    },
    [theme.breakpoints.down("sm")]:{
      height:"62px !important"
    }
  },
  noHoverOnLogo:{
  "&:hover": {
      backgroundColor: "transparent",
    },
  },
  //making react-scroll link same size as button it's wrapped in
  reactScrollLink: {
    padding: "13.5px 0px",
  },
  // Menu button Styling
  menuButton: {
    width: "50px",
    padding: "0px 8px",
    boxSizing: "content-box",
    height:"62px !important"
  },
  menuIcon: {
    color: "#f4f7fa",
    height: "47px",
  },
  navLinks: {
    position: "relative",
    fontSize: "1.40rem",
    margin: "0rem 1rem",
    [theme.breakpoints.up("lg")]: {
      marginRight: "32px",
    },
    padding: "0px 2px",
    letterSpacing: "1px !important",
    cursor: "pointer",
    textDecoration: "none !important",
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
        <div className={`${classes.wrapper} ${classes.flexbox}`}>{getDesktopLinks()}</div>
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
          <div className={`${classes.drawerContainer} ${classes.flexbox}`}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const myLogo = () => {
    return (
      <Button
        classes={{ root: classes.logoButton }}
        {...{
          className: classes.noHoverOnLogo,
        }}
        disableFocusRipple
        disableRipple
      >
        <LinkScroll
          to={"Home"}
          smooth={true}
          duration={500}
          spy={true}
          offset={-76}
          exact='true'
          className={`${classes.reactScrollLink} ${classes.flexbox}`}
        >
          <img className={classes.logoImage} src={logo} alt="car" />
        </LinkScroll>
      </Button>
    );
  };

  /* Mapping drawer links */
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            className: classes.navLinks,
          }}
          disableFocusRipple
          disableRipple
        >
          <LinkScroll
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-61} //different offset for mobile nav
            exact='true'
            className={classes.reactScrollLink}
            onClick={handleDrawerClose}
          >
            {label}
          </LinkScroll>
        </Button>
      );
    });
  };

  /* Mapping desktop links */
  const getDesktopLinks = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            className: classes.navLinks,
          }}
          disableFocusRipple
          disableRipple
        >
          <LinkScroll
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
            exact='true'
            className={classes.reactScrollLink}
          >
            {label}
          </LinkScroll>
        </Button>
      );
    });
  };

  /* Slight shadow only on Mobile Navbar*/

  return (
  <AppBar data-aos="fade-down"
  data-aos-delay="200" elevation={mobileView ? 1 : 0}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
