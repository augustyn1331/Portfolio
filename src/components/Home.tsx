import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { default as MuiButton } from "@material-ui/core/Button";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import Svg from "../img/startup.svg";
import { Link as LinkScroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    minHeight: "100vh",
    padding: "0px 16px 32px 16px !important",
    [theme.breakpoints.up("md")]: {
      padding: "76px 16px 76px 16px !important",
    },
    backgroundColor: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
    transition: "background-color 0.3 ease-in-out",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  svgWrap: {
    maxWidth: "230px",
    margin: "16px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "400px",
      margin: "36px 16px 0px 16px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "500px",
      margin: "44px 65px 0px 65px",
    },
  },
  svgStyle: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      transform: "translatey(0px)",
      animation: "floatT 8s ease-in-out infinite",
    },
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
  button: {
    margin: "1.5rem 0rem 2rem 0rem",
    [theme.breakpoints.up("md")]: {
      margin: "3.5rem 0rem 1rem 0rem",
      transition: "background-color 0.4s ease-in-out",
      "&:hover": {
        transition: "background-color 0.4s ease-in-out",
        // animation: "$grow 1s ease-in-out infinite",
      },
    },
  },
  buttonText: {
    letterSpacing: "0.07rem",
    fontWeight: 600,
    fontSize: "0.9rem",
    padding: "9px 23px",
    [theme.breakpoints.up("lg")]: {
      padding: "10px 32px",
      transform: "scale(1)",
      fontSize: "1.15rem",
    },
  },
  emojiicon: {
    fontSize: "1.6rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
    paddingRight: "6px",
  },

  // "@keyframes grow": {
  //   "0%": {
  //     transform: "scale(1)",
  //   },
  //   "50%": {
  //     transform: "scale(1.05)",
  //   },
  //   "100%": {
  //     transform: "scale(1)",
  //   },
  // },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container
      className={`${classes.root} ${classes.flexbox}`}
      maxWidth="xl"
      id="Home"
    >
      <div className={`${classes.wrapper} ${classes.flexbox}`}>
        <Typography
          variant="h1"
          component="h1"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Hej, tu Augustyn!
        </Typography>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="600"
          className={classes.flexbox}
          style={{ flexDirection: "column" }}
        >
          <Typography variant="subtitle1" component="h6">
            Witam Cię na moim portfolio!
          </Typography>
          <Typography variant="subtitle1" component="h6">
            Dowiedz się o mnie więcej, klikając na poniższy przycisk!
          </Typography>
          <MuiButton
            {...{
              component: LinkScroll,
            }}
            variant={"contained"}
            color={"primary"}
            className={classes.button}
          >
            <LinkScroll
              to={"AboutMe"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-62}
              exact="true"
              className={`${classes.buttonText} ${classes.flexbox}`}
            >
              <EmojiPeopleIcon className={classes.emojiicon} />
              Więcej
            </LinkScroll>
          </MuiButton>
        </div>
      </div>
      <div
        className={classes.svgWrap}
        data-aos-delay="100"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
      >
        <img className={classes.svgStyle} src={Svg} alt="car" />
      </div>
    </Container>
  );
}
