import React, { useState, useEffect } from "react";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect, Route, Switch } from "react-router-dom";
import OneLongPage from "../../pages/OneLongPage";
import {ThemeProvider } from "@material-ui/core/styles";
import HashLoader from "react-spinners/HashLoader";
import useStyles from "./styles";
import logo from "../../img/logoblue.png";

const App = () => {
 const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.loader} data-aos="fade-in"
        data-aos-delay="150"
        data-aos-duration="500"> 
          <img className={classes.logoImage} src={logo} alt="car"/>
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
