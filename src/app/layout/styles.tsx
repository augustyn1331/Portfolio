import { Theme, makeStyles } from "@material-ui/core/styles";
const color = 'rgb(255, 255, 255, 255)';
const useStyles = makeStyles<Theme>((theme: Theme) => ({
  "@global": {
      "*":{
        boxSizing: "border-box",
        margin: "0",
        padding: "0"
      },
    html: {
      fontSize: "19px",
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },
    body: { overflowX: "hidden", backgroundColor: "white" },
      h1: {
        fontWeight: 600,
        textAlign: "center",
        margin: "1.5rem 1rem 2rem 1rem",
        lineHeight: "1.1em",
        letterSpacing: "-0.02em",
        color:"#202020",
        fontSize: "1.8rem !important",
        [theme.breakpoints.up("sm")]: {
          fontSize: "2.4rem !important",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "3.1rem !important",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "3.7rem !important",
        },
      },
    h2: {
      fontSize: "2.6rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.2rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.8rem !important",
      },
    },
    h3: {
      fontSize: "1.3rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.4rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.7rem !important",
      },
    },
    h4: {
      fontSize: "0.80rem !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.95rem !important",
      },
    },
    h6: {
      fontSize: "0.75rem !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem !important",
      },
    },
    p: {
      fontSize: "0.8rem !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem !important",
      },
    },
    "@keyframes floatT": {
      "0%": {
        transform: "translatey(0px)"
      },
      "50%": {
        transform: "translatey(-10px)"
      },
      "100%": {
        transform: "translatey(0px)"
      }
    },
    "@keyframes shake": {
      "0%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(15deg)" },
      "50%": { transform: "rotate(-15deg)" },
      "75%": { transform: "rotate(5deg)" },
      "85%": { transform: "rotate(-5deg)" },
      "100%": { transform: "rotate(0deg)" },
    }
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "90vh",
  },
  logoImage: {
    boxSizing: "content-box",
    width: "100px",
    marginBottom:"32px",
    [theme.breakpoints.up("sm")]: {
      width: "115px",
    },
  },
}));

export default useStyles;
