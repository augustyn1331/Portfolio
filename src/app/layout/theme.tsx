import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { plPL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: "#f4f7fa",
        main: "rgb(23, 93, 175)",
        dark: "#243344",
      },
      secondary: {
        main: "#af2c27",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    shape: {
      borderRadius: 12,
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          backgroundColor: "white",
          color: "rgba(0, 0, 0, 0.87)",
          boxShadow:
            "0px 4px 2px -3px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 2px 6px 1px rgba(0,0,0,0.12)",
          fontSize: "13.5px",
          fontWeight: 300,
        },
      },
      MuiTypography: {
        h1: {
          fontWeight: 700,
          textAlign: "center",
          padding: "0rem",
          margin: "1.5rem 1rem 1.75rem 1rem",
          lineHeight: "1.1em",
          letterSpacing: "-0.02em",
        },
        h2: {
          fontWeight: 600,
          textAlign: "center",
          padding: "0rem",
          margin: "1rem 1rem 2.5rem 1rem",
          letterSpacing: "-0.01em",
        },
        h3: {
          fontWeight: 500,
          textAlign: "center",
          padding: "0rem",
          letterSpacing: "-0.01em",
          color: "#45435f",
        },
        subtitle1: {
          color: "#5c6573",
          fontWeight: 400,
          textAlign: "center",
          margin: "0rem 1rem 0rem 1rem",
          letterSpacing: "-0.01em",
        },
        body1: {
          color: "#f4f7fa",
          fontWeight: 400,
          textAlign: "left",
        },
        body2: {
          color: "#45435f",
          fontWeight: 300,
          textAlign: "center",
          letterSpacing: "-0.01em",
          lineHeight: "1.4",
        },
      },
      MuiListItemIcon: {
        root: {
          fontWeight: 200,
          minWidth: "37px",
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: "rgba(0, 0, 0, .0) !important",
          marginLeft: "6px",
          marginRight: "8px",
          boxShadow: "none",
        },
      },
      MuiDialogContent: {
        root: {
          padding: "0px",
        },
      },
      MuiDialogActions: {
        root: {
          backgroundColor: "white",
        },
      },
      MuiOutlinedInput: {
        root: {
          height: "3em",
        },
        adornedEnd: {
          padding: "2px",
        },
      },
      MuiInputBase: {
        root: {
          fontWeight: 300,
          "&$disabled": {
            color: "rgba(0, 0, 0, 0.62)",
          },
        },
      },
      MuiIconButton: {
        root: {
          paddingLeft: "6px",
          paddingRight: "6px",
          "&:hover": {
            backgroundColor: "$labelcolor",
          },
        },
      },
      MuiInputLabel: {
        // Name of the component ⚛️ / style sheet
        root: {
          fontSize: "1em",
          // Name of the rule
          "&$focused": {
            // increase the specificity for the pseudo class
            backgroundColor: "#FFFFFF",
          },
        },
      },
      MuiCollapse: {
        wrapperInner: {
          padding: "0",
          display: "flex",
          justifyContent: "flex-end",
        },
      },
      MuiToolbar: {
        gutters: {
          paddingLeft: "12px !important",
        },
      },
      MuiContainer: {
        root: {
          padding: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
      MuiTouchRipple: {
        rippleVisible: {
          // color:"rgba(23, 93, 175, 0.5)",
        },
      },
      MuiButton: {
        root: {
          padding: "0px",
        },
        startIcon: {
          marginRight: "4px",
        },
        outlined: {
          padding: "4px 10px",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#243344",
        },
        contained: {
          borderRadius: "4px",
          boxShadow: "2px 2px 7px 0 rgba(0,0,0,.25)",
        },
        label: {
          fontWeight: 300,
        },
      },
    },
  },
  plPL
);

export default theme;
