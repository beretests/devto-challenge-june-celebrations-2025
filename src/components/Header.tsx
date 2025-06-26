import React from "react";
import ThemeSelect from "./ThemeSelect";
import { Box, Typography } from "@mui/material";
import GoatCheeseIcon from "./GoatCheeseIcon";

const Header: React.FC = () => {
  return (
    <Box
      component={"header"}
      sx={{
        px: { xs: 2, md: 4, lg: 5 },
        py: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        position: "sticky",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <GoatCheeseIcon />

        <Typography
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "1.25rem",
              sm: "1.75rem",
              md: "2.25rem",
              lg: "2.75rem",
            },
            color: "primary.contrastText",
          }}
        >
          Goat Cheese Day, June 25
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <ThemeSelect />
      </Box>
    </Box>
  );
};

export default Header;
