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
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.2rem !important",
      },
    },
    h2: {
      fontSize: "2.6rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.2rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem !important",
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
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem !important",
      },
    },
    p: {
      fontSize: "0.8rem !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem !important",
      },
    },
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
