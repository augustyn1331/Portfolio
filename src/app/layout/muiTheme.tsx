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
        main: "#ec576c"
      },
    },
    shape: {
      borderRadius: 4,
    },
  },
  plPL
);

export default theme;
