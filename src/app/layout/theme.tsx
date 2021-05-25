import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { plPL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: "#fafbfd",
        main: "#175daf",
        dark: "#202020",
      },
      secondary: {
        light: "#e5e437",
        main: "#4ec4c1",
        dark:"#ec576c"
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    shape: {
      borderRadius: 4,
    },
    overrides: {
      MuiTypography: {
        h2: {
          fontWeight: 600,
          textAlign: "center",
          margin: "1rem 1rem 2.5rem 1rem",
          letterSpacing: "-0.01em",
          color: "#202020",
        },
        h3: {
          fontWeight: 500,
          textAlign: "center",
          letterSpacing: "0em",
          color: "#202020",
        },
        h4: {
          fontWeight: 600,
          textAlign: "left",
          letterSpacing: "0.01rem",
          color: "#202020",
          textTransform:"uppercase"
        },
        h6: {
          fontWeight: 300,
          textAlign: "left",
          color: "#202020",
          lineHeight:"18px",
          marginTop:"10px",
          letterSpacing: "0.01rem",
        },
        subtitle1: {
          color: "#5c6573",
          fontWeight: 400,
          textAlign: "center",
          margin: "0rem 1rem 0rem 1rem",
          letterSpacing: "-0.01em",
        },
        body1: {
          color: "#ffffffdd",
          fontWeight: 400,
          textAlign: "left",
        },
        body2: {
          color: "#202020",
          fontWeight: 300,
          textAlign: "center",
        },
      },
      MuiButton: {
        root: {
          padding: "0px",
        },
        contained: {
          boxShadow: "2px 2px 7px 0 rgba(0,0,0,.25)",
        },
      },
    },
  },
  plPL
);

export default theme;
