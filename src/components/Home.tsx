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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row !important",
    },
    background: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
  },
  svgWrap: {
    maxWidth: "250px",
    boxSizing: "border-box",
    margin: "16px 16px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "400px",
      margin: "16px 30px",
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
    color: "#243344",
    height: "45px !important",
    fontSize: "1.4rem",
    letterSpacing: "-0.03em",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "16px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "16px 30px",
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
    <Container className={classes.root} maxWidth="xl" id="home">
      <div className={classes.wrapper}>
        <Typography variant="h1" component="h1">
          Hej, tu Augustyn!
        </Typography>
        <Typography variant="subtitle1" component="p">
          Witam Cię na moim portfolio!<br/> Dowiedz się o mnie więcej, klikając na poniższy przycisk!
        </Typography>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-delay="1500"
        >
          <MuiButton
            {...{
              to: "/Portfolio/",
              component: RouterLink,
            }}
            variant={"outlined"}
            className={classes.button}
            classes={{
              root: classes.buttonRoot,
            }}
          >
            <EmojiPeopleIcon className={classes.emojiicon} />
            WIĘCEJ
          </MuiButton>
        </div>
      </div>
      <div className={classes.svgWrap}>
        <img className={classes.svg} src={Mobiletesting} alt="car" />
      </div>
    </Container>
  );
}
