// theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";
import materialTheme from "./material-theme.json";

const { light, dark } = materialTheme.schemes;

const buildMuiTheme = (scheme: any, mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: scheme.primary,
      contrastText: scheme.onPrimary,
      light: scheme.primaryContainer,
      dark: scheme.onPrimaryContainer,
    },
    secondary: {
      main: scheme.secondary,
      contrastText: scheme.onSecondary,
      light: scheme.secondaryContainer,
      dark: scheme.onSecondaryContainer,
    },
    tertiary: {
      main: scheme.tertiary,
      contrastText: scheme.onTertiary,
      light: scheme.tertiaryContainer,
      dark: scheme.onTertiaryContainer,
    },
    error: {
      main: scheme.error,
      contrastText: scheme.onError,
      light: scheme.errorContainer,
      dark: scheme.onErrorContainer,
    },
    background: {
      default: scheme.background,
      paper: scheme.surfaceContainer ?? scheme.surface,
    },
    surface: {
      main: scheme.surface,
      contrastText: scheme.onSurface,
    },
    text: {
      primary: scheme.onSurface,
      secondary: scheme.onSurfaceVariant,
      disabled: scheme.onSurfaceDisabled ?? "#A1A1A1",
    },
    divider: scheme.outline,
    info: {
      main: scheme.inversePrimary,
      contrastText: scheme.inverseOnSurface ?? scheme.onPrimary,
    },
    custom: {
      onBackground: scheme.onBackground,
    },
  },
  typography: {
    fontFamily: '"Lora Variable", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display Variable", serif',
      fontSize: "3rem",
      fontWeight: 600,
      color: scheme.onBackground,
    },
    h2: {
      fontFamily: '"Playfair Display Variable", serif',
      fontSize: "2.25rem",
      fontWeight: 600,
      color: scheme.onBackground,
    },
    h3: {
      fontFamily: '"Playfair Display Variable", serif',
      fontSize: "1.75rem",
      fontWeight: 500,
      color: scheme.onBackground,
    },
    body1: {
      fontFamily: '"Lora Variable", serif',
      fontSize: "1rem",
      color: scheme.onSurface,
    },
    body2: {
      fontFamily: '"Lora Variable", serif',
      fontSize: "0.875rem",
      color: scheme.onSurfaceVariant,
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: scheme.primary,
          color: scheme.onPrimary,
          "&:hover": {
            backgroundColor: scheme.primaryContainer,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: scheme.surfaceContainerHigh,
          color: scheme.onSurface,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: scheme.surface,
          color: scheme.onSurface,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: scheme.primary,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: scheme.primary,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: scheme.outline,
            },
            "&:hover fieldset": {
              borderColor: scheme.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: scheme.primary,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: scheme.surfaceContainer ?? scheme.surface,
          color: scheme.onSurface,
          "&:hover": {
            backgroundColor: scheme.surfaceContainerHigh ?? scheme.surface,
          },
        },
        icon: {
          color: scheme.onSurfaceVariant,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: scheme.onSurfaceVariant,
          "&.Mui-focused": {
            color: scheme.primary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: scheme.outline,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: scheme.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: scheme.primary,
          },
          backgroundColor: scheme.surfaceContainerLow ?? scheme.surface,
          color: scheme.onSurface,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: scheme.onSurfaceVariant,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: scheme.surfaceContainer ?? scheme.surface,
          color: scheme.onSurface,
          borderRadius: 8,
          boxShadow: `0px 4px 20px ${scheme.shadow ?? "#00000020"}`,
        },
        list: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: scheme.secondaryContainer,
            color: scheme.onSecondaryContainer,
            "&:hover": {
              backgroundColor:
                scheme.secondaryFixedDim ?? scheme.secondaryContainer,
            },
          },
          "&:hover": {
            backgroundColor: scheme.surfaceContainerHigh ?? scheme.surface,
          },
        },
      },
    },
  },

  custom: {
    surfaceContainerHigh: scheme.surfaceContainerHigh,
    surfaceContainerHighest: scheme.surfaceContainerHighest,
    inverseSurface: scheme.inverseSurface,
    inverseOnSurface: scheme.inverseOnSurface,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      main: string;
      contrastText: string;
    };
    tertiary: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    custom: {
      onBackground: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      main: string;
      contrastText: string;
    };
    tertiary?: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    custom?: {
      onBackground: string;
    };
  }

  interface Theme {
    custom?: {
      surfaceContainerHigh?: string;
      surfaceContainerHighest?: string;
      inverseSurface?: string;
      inverseOnSurface?: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      surfaceContainerHigh?: string;
      surfaceContainerHighest?: string;
      inverseSurface?: string;
      inverseOnSurface?: string;
    };
  }
}

export const lightTheme = createTheme(buildMuiTheme(light, "light"));
export const darkTheme = createTheme(buildMuiTheme(dark, "dark"));
