import { makeStyles} from "@material-ui/core/styles";
import { default as MuiButton } from "@material-ui/core/Button";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import Svg from "./../img/startup.svg";
import { Link as LinkScroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    flexDirection: "column",
    minHeight: "100vh",
    padding: "0px 16px 32px 16px !important",
    background: "linear-gradient(#fafbfd,#fff,#fff,#fff)",
    [theme.breakpoints.down("md")]: {
      animation: "fadein 0.2s ease-out",
      WebkitAnimation: "fadein 0.2s ease-out",
    },
    [theme.breakpoints.up("md")]: {
      padding: "76px 16px 76px 16px !important",
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
      margin: "44px 16px 0px 16px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "500px",
      margin: "52px 65px 0px 65px",
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
    padding: "0px",
    boxShadow: "2px 2px 7px 0 rgba(0,0,0,.25)",
    [theme.breakpoints.up("md")]: {
      margin: "3.5rem 0rem 1rem 0rem",
    },
  },
  buttonText: {
    letterSpacing: "0.07rem",
    fontWeight: 600,
    fontSize: "0.9rem",
    padding: "9px 23px",
    [theme.breakpoints.up("lg")]: {
      padding: "10px 32px",
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
  subTitle: {
    color: "#5c6573",
    fontWeight: 400,
    textAlign: "center",
    padding: "3px 16px 3px 16px",
    letterSpacing: "-0.01em",
    fontSize: "0.85rem !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.95rem !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.05rem !important",
    },
  },
  flexColumn: {
    flexDirection: "column",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${classes.flexbox}`} id="Home">
      <div className={`${classes.wrapper} ${classes.flexbox}`}>
        <h1 data-aos="fade-down" data-aos-delay="100">
          Hej, tu Augustyn!
        </h1>
        <div
          className={`${classes.flexColumn} ${classes.flexbox}`}
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <p className={classes.subTitle}>Witam Cię na moim portfolio!</p>
          <p className={classes.subTitle}>
            Dowiedz się o mnie więcej, klikając na poniższy przycisk!
          </p>

          <MuiButton
            //button with a link to about me page
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
              offset={-53}
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
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img className={classes.svgStyle} src={Svg} alt="car" />
      </div>
    </div>
  );
}
