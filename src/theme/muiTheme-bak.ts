import { createTheme } from "@mui/material/styles";
import materialTheme from "./material-theme.json";

const lightScheme = materialTheme.schemes.light;
const darkScheme = materialTheme.schemes.dark;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightScheme.primary,
      contrastText: lightScheme.onPrimary,
    },
    secondary: {
      main: lightScheme.secondary,
      contrastText: lightScheme.onSecondary,
    },
    background: {
      default: lightScheme.background,
      paper: lightScheme.surface,
    },
    error: {
      main: lightScheme.error,
      contrastText: lightScheme.onError,
    },
    text: {
      primary: lightScheme.onBackground,
      secondary: lightScheme.onSurfaceVariant,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkScheme.primary,
      contrastText: darkScheme.onPrimary,
    },
    secondary: {
      main: darkScheme.secondary,
      contrastText: darkScheme.onSecondary,
    },
    background: {
      default: darkScheme.background,
      paper: darkScheme.surface,
    },
    error: {
      main: darkScheme.error,
      contrastText: darkScheme.onError,
    },
    text: {
      primary: darkScheme.onBackground,
      secondary: darkScheme.onSurfaceVariant,
    },
  },
});
