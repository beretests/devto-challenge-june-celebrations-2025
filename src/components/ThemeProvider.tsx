import React, { useEffect } from "react";
import { useThemeStore } from "../stores/themeStore";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/muiTheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useThemeStore();
  const [muiTheme, setMuiTheme] = React.useState(
    theme === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "system") {
      root.removeAttribute("data-theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMuiTheme(systemPrefersDark ? darkTheme : lightTheme);
    } else {
      root.setAttribute("data-theme", theme);
      setMuiTheme(theme === "dark" ? darkTheme : lightTheme);
    }
  }, [theme]);

  return (
    <>
      <MuiThemeProvider theme={muiTheme === darkTheme ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </>
  );
};
