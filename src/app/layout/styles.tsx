import { Theme, makeStyles } from "@material-ui/core/styles";

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
    br: {
        [theme.breakpoints.down("md")]: {
          display: "block", /* makes it have a width */
          content: '""', /* clears default height */
          marginBottom: "1rem", /* change this to whatever height you want it */
        },
      },
    h1: {
      fontSize: "1.8rem !important",
      // letterSpacing: "-0.03em",
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
        fontSize: "1.7rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.7rem !important",
      },
    },
    h6: {
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
        transform: "translatey(-8px)"
      },
      "100%": {
        transform: "translatey(0px)"
      }
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
    height: "100px",
    marginBottom:"80px",
    [theme.breakpoints.up("sm")]: {
      height: "115px",
      marginBottom:"64px",
    },
  },
}));

export default useStyles;
