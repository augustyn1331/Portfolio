import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../../img/logo.png";
import SVGMenuIcon from "../../../img/MenuIcon";
import useViewport from "../hooks/useViewport";
import globalStyles from "../../../app/layout/styles";

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
  //Containers
  toolbar: {
    justifyContent: "space-between",
    minHeight: "54px",
  },
  appbar: {
    [theme.breakpoints.down("md")]: {
      animation: "fadein 0.2s ease-out",
      WebkitAnimation: "fadein 0.2s ease-out",
    },
  },
  drawer: {
    background: "linear-gradient(#f7f9fb,#fff,#fff,#fff,#fff)",
  },
  drawerWrapper: {
    padding: "20px 30px",
    listStyleType: "none !important",
  },
  //Logo img and logo link
  navLogo: {
    height: "30px",
    [theme.breakpoints.up("md")]: {
      height: "41px",
    },
  },
  navLogoLink: {
    marginLeft: "16px",
    height: "54px",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "100px",
    },
  },
  //Menu button
  menuButton: {
    padding: "0px 8px",
    height: "54px",
  },
  menuIcon: {
    height: "25px",
    fill: "rgba(255,255,255,0.95)",
  },
  //Menu links
  navUl: {
    flexDirection: "row",
    marginTop: "0px",
    listStyleType: "none !important",
    [theme.breakpoints.up("lg")]: {
      marginRight: "64px",
    },
  },
  navList: {
    height: "76px",
    margin: "0rem 1rem",
    //selectors for having different hover color based on location without need to use javascript
    // "& #AboutMeLink::before": {
    //   backgroundColor: theme.palette.secondary.light,
    // },
    // "& #ProjectsLink::before": {
    //   backgroundColor: theme.palette.secondary.main,
    // },
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

    //underline shape
    "&::before": {
      content: "''",
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "0",
      height: "3px",
      transition: "transform 200ms ease-out",
      transform: "scaleX(0)",
      transformOrigin: "100% 50%",
      backgroundColor: theme.palette.secondary.main,
    },
    //underline animation on active link
    "&.active::before": {
      transform: "scaleX(1)",
      transformOrigin: "0% 50%",
    },
  },
}));


export default function NavBar() {
  // styles (css in js)
  const {
    toolbar,
    appbar,
    drawer,
    drawerWrapper,
    navList,
    navLogo,
    navLogoLink,
    navLink,
    navUl,
    menuIcon,
    menuButton,
  } = useStyles();

  const { flexbox } = globalStyles();
  /* useState to control drawer being opened*/
  const [drawerOpen, setDrawerOpen] = useState(false);
  /*Open and Close drawer */
  const handleDrawerState = () => setDrawerOpen((currState) => !currState);
  // Get current window width custom hook
  const width = useViewport();
  const mobileView = width < 960;

  /* Display desktop Navbar */
  const navbarDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {myLogo()}
        <ul className={`${navUl} ${flexbox}`}>{getDesktopLinks()}</ul>
      </Toolbar>
    );
  };

  /* Display mobile Navbar */
  const navbarMobile = () => {
    return (
      <Toolbar className={toolbar}>
        {myLogo()}
        <IconButton className={menuButton} onClick={handleDrawerState}>
          <SVGMenuIcon className={menuIcon} />
        </IconButton>
        <Drawer
          classes={{ paper: drawer }}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerState,
          }}
        >
          <ul className={`${drawerWrapper} ${flexbox}`}>{getMobileLinks()}</ul>
        </Drawer>
      </Toolbar>
    );
  };

  /* Mapping drawer links */
  const getMobileLinks = () => {
    return headersData.map(({ label, href }) => {
      return (
        <li key={label} className={navList}>
          <LinkScroll
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-53} //different offset for mobile nav
            exact="true"
            className={`${navLink} ${flexbox}`}
            onClick={handleDrawerState}
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
        <li key={label} className={navList}>
          <LinkScroll
            id={href + "Link"}
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-76}
            exact="true"
            className={`${navLink} ${flexbox}`}
          >
            {label}
          </LinkScroll>
        </li>
      );
    });
  };

  //Logo button
  const myLogo = () => {
    return (
      <LinkScroll
        to={"Home"}
        smooth={true}
        duration={500}
        spy={true}
        offset={-76}
        exact="true"
        className={`${navLogoLink} ${flexbox}`}
      >
        <img className={navLogo} src={logo} alt="car" />
      </LinkScroll>
    );
  };

  return (
    <div data-aos="fade-down" data-aos-delay="100">
      <AppBar elevation={mobileView ? 1 : 0} className={appbar}>
        {mobileView ? navbarMobile() : navbarDesktop()}
      </AppBar>
    </div>
  );
}
