import React, { useState, useEffect } from "react";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect, Route, Switch } from "react-router-dom";
import OneLongPage from "../../pages/OneLongPage";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "./styles";
import logo from "../../img/logoblue.png";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const App = () => {
  const classes = useStyles();
  //loading screen animation
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
        <div
          className={classes.loader}
          data-aos="fade-in"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          <img className={classes.logoImage} src={logo} alt="car" />
          <ClimbingBoxLoader size={15} color={"#175daf"} loading={loading} />
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
