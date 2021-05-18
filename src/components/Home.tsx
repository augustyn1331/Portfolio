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
    transition:"background-color 0.3 ease-in-out",
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
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "550px",
      margin: "16px 65px",
    },
  },
  svgStyle: {
    width: "100%",
  },
  button: {
    margin: "0.875rem 0rem 1rem 0rem",
    padding: "1rem 6px",
  },
  buttonRoot: {
    height: "40px !important",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3rem",
      height: "45px !important",
    },
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
          data-aos-delay="200"
        >
          Hej, tu Augustyn!
        </Typography>
        <div data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="500" className={classes.flexbox} style={{flexDirection: "column"}}>
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
              offset={-62}
              exact="true"
              className={classes.flexbox}
            >
              <EmojiPeopleIcon className={classes.emojiicon} />
              WIĘCEJ
            </LinkScroll>
          </MuiButton>
          </div>
      </div>
        <div
          className={classes.svgWrap}
          data-aos-delay="200"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
        >
          <img className={classes.svgStyle} src={Svg} alt="car" />
        </div>
    </Container>
  );
}
