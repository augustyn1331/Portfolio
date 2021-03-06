import { Theme, makeStyles } from "@material-ui/core/styles";

const dark = "#202020";
const light = "#ffffffdd";
const globalStyles = makeStyles<Theme>((theme: Theme) => ({
  "@global": {
    "*": {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      fontFamily: "Poppins, sans-serif",
    },
    html: {
      fontSize: "18px",
    },
    body: { overflowX: "hidden", backgroundColor: "white" },
    "h1, h2": {
      color: dark,
    },
    "h1, h2, h4": {
      fontWeight: 600,
    },
    "h1, h2, h3": {
      textAlign: "center",
    },
    "h3, h4, h6": {
      letterSpacing: "0.01rem",
    },

    h1: {
      margin: "1.5rem 1rem 2rem 1rem",
      lineHeight: "1.1em",
      letterSpacing: "-0.02rem",
      fontSize: "1.8rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.1rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "3.7rem",
      },
    },
    h2: {
      margin: "1rem 1rem 2.5rem 1rem",
      letterSpacing: "-0.01rem",
      fontSize: "2.6rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.2rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.8rem",
      },
    },
    h3: {
      fontWeight: 500,
      letterSpacing: "0.01rem",
      color: "#45435f",
      fontSize: "1.15rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.6rem",
      },
    },
    h4: {
      textAlign: "left",
      textTransform: "uppercase",
      fontSize: "0.80rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.95rem",
      },
    },
    h6: {
      fontWeight: 300,
      lineHeight: "18px",
      marginTop: "10px",
      fontSize: "0.75rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
    },
    p: {
      color: light,
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
    },

    //slight floating animation
    "@keyframes floatT": {
      "0%": {
        transform: "translatey(0px)",
      },
      "50%": {
        transform: "translatey(-14px)",
      },
      "100%": {
        transform: "translatey(0px)",
      },
    },

    //shaking animation, used in svgscard
    "@keyframes shake": {
      "0%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(15deg)" },
      "50%": { transform: "rotate(-15deg)" },
      "75%": { transform: "rotate(5deg)" },
      "85%": { transform: "rotate(-5deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    "@keyframes fadein": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
    "@-webkit-keyframes fadein": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  },

  //loading page styles
  loadingPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "90vh",
    animation: "fadein 0.4s ease-out",
    WebkitAnimation: "fadein 0.4s ease-out",
  },
  loadingPageLogo: {
    boxSizing: "content-box",
    width: "100px",
    marginBottom: "32px",
    [theme.breakpoints.up("sm")]: {
      width: "115px",
    },
  },
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default globalStyles;
