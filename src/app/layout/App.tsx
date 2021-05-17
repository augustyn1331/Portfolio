import React, { useState, useEffect } from "react";
import "./styles.css";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect, Route, Switch } from "react-router-dom";
import OneLongPage from "../../pages/OneLongPage";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import HashLoader from "react-spinners/HashLoader";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  "@global": {
    html: {
      fontSize: "19px",
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
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
  loader:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width:"100%",
    height:"90vh"
  }
}));

const App = () => {
 const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader
            size={100}
            color={"175daf"}
            loading={loading}
          />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/">
              <Redirect to="/Portfolio/" />
            </Route>
            <Route path="/Portfolio/" component={OneLongPage} />
          </Switch>
        </ThemeProvider>
      )}
    </>
  );
};
export default App;
