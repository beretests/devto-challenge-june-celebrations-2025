import React from "react";
import { useThemeStore } from "../stores/themeStore";
import ThemeSelect from "./ThemeSelect";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Box sx={{ mr: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Goat Cheese Day, June 25
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ ml: 2 }}>
        <ThemeSelect />
      </Box>
    </Box>
  );
};

export default Header;
