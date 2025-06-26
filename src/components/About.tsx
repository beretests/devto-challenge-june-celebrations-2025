import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        display: "flex",
        backgroundColor: "surface.main",
        color: "surface.contrastText",
        alignItems: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          About Goat Cheese Day
        </Typography>
        <Typography gutterBottom sx={{ textAlign: "justify", pb: 2 }}>
          Goat Cheese Day is a celebration of the delicious and diverse world of
          cheese made from goat's milk. It’s a time to recognize small farmers,
          cheesemakers, and food lovers who bring goat cheese to our tables.
        </Typography>
        <Typography sx={{ textAlign: "justify", pb: 2 }}>
          Goat Cheese Day was initiated in 1998 by the American Cheese Society
          and the French goat cheese producer Bongrain (now Savencia Fromage &
          Dairy). They created it to raise awareness about the health, flavor,
          and sustainable advantages of goat cheese.{" "}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>Date: June 25th</Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
