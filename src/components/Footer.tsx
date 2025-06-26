import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()} Goat Cheese Day. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
