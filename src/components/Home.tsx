import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { default as MuiButton } from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Mobiletesting from "../img/startup.svg";
import { useTheme } from "@material-ui/core/styles";
import { Link as LinkScroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  flexbox:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    minHeight: "100vh",
    paddingTop: "76px",
    background: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  svgWrap: {
    maxWidth: "250px",
    margin: "32px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "550px",
      margin: "16px 65px",
    },
    transition: "transform ease-in-out 0.3s",
    "&:hover": {
      transform: "scale(1.10) translateZ(0)",
      transition: "transform ease-in-out 0.3s",
    },
    willChange: "transform",
    cursor: "pointer",
  },
  svg: {
    width: "100%",
  },
  button: {
    margin: "0.875rem 0rem 1rem 0rem",
    padding: "1rem 6px",
  },
  buttonRoot: {
    color: theme.palette.primary.dark,
    height: "45px !important",
    fontSize: "1.3rem",
    letterSpacing: "-0.03em",
  },
  wrapper: {
    flexDirection: "column",
    margin: "76px 0px 12px 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "80px 0px 16px 0px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "16px 40px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "16px 65px",
    },
  },
  emojiicon: {
    fontSize: "2rem",
    paddingRight: "6px",
  },
}));

export default function Home() {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);
  const classes = useStyles();
  return (
    <Container className={`${classes.root} ${classes.flexbox}`} maxWidth="xl" id="Home">
      <div className={`${classes.wrapper} ${classes.flexbox}`} >
        <Typography variant="h1" component="h1">
          Hej, tu Augustyn!
        </Typography>
        <Typography variant="subtitle1" component="h6">
          Witam Cię na moim portfolio!
        </Typography>
        <Typography variant="subtitle1" component="h6">
          Dowiedz się o mnie więcej, klikając na poniższy przycisk!
        </Typography>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-delay="1500"
        >
          <MuiButton
            {...{
              component: LinkScroll,
            }}
            variant={"outlined"}
            className={classes.button}
            classes={{
              root: classes.buttonRoot,
            }}
          >
            <LinkScroll
          to={"AboutMe"}
          smooth={true}
          duration={500}
          spy={true}
          offset={-76}
          exact='true'
          className={classes.flexbox}
        >
         <EmojiPeopleIcon className={classes.emojiicon} />
            WIĘCEJ
        </LinkScroll>
          </MuiButton>
          
          
        </div>
      </div>
      <div className={classes.svgWrap}>
        <img className={classes.svg} src={Mobiletesting} alt="car" />
      </div>
    </Container>
  );
}
