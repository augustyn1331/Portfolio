import React from "react";
import "./styles.css";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Redirect, Route, Switch } from "react-router-dom";
import OneLongPage from "../../pages/OneLongPage";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  "@global": {
    html: {
      fontSize: "19px",
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },
    h1:{
      fontSize:"1.8rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.2rem !important",
      },
    },   
    h2:{
      fontSize:"2.6rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.2rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem !important",
      },
    },   
    h3:{
      fontSize:"1.3rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.7rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.7rem !important",
      },
    },  
    h6:{
      fontSize:"0.9rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem !important",
      },
    },   
    p:{
      fontSize:"0.8rem !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem !important",
      },
    }
  },
  
}));

const App = () => {
  useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Portfolio/"/>
          </Route>
          <Route path="/Portfolio/" component={OneLongPage} />
        </Switch>

    </ThemeProvider>
  );
};
export default App;
