import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import HeroImage from "../assets/images/hero/still-life-fresh-cheese.jpg";
import { useEventAnimation } from "../stores/eventAnimationStore";

const buttons = [
  { label: "Explore Events", targetId: "events" },
  { label: "Learn about Goat Cheese", targetId: "about" },
  { label: "Get Recipes", targetId: "recipes" },
];

const HeroSection: React.FC = () => {
  const { animate } = useEventAnimation();

  const handleClick = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (targetId === "events") {
        animate();
      }
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={HeroImage}
        alt="Celebrating Goat Cheese"
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: theme.palette.mode === "dark" ? 0.5 : 0.25,
          filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
          zIndex: 0,
        })}
      />
      <Box
        sx={(theme) => ({
          display: theme.palette.mode === "dark" ? "block" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.primary.light,
          opacity: 0.1,
          zIndex: 1,
        })}
      />

      <Container sx={{ zIndex: 2 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
          })}
        >
          Celebrate Goat Cheese Day!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
          })}
        >
          Join us in honoring the rich tradition and taste of goat cheese.
        </Typography>
        {buttons.map(({ label, targetId }) => (
          <Button
            key={targetId}
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mx: 1, my: 2 }}
            onClick={() => {
              handleClick(targetId);
            }}
          >
            {label}
          </Button>
        ))}
      </Container>
      <Typography
        variant="caption"
        display="block"
        color="text.secondary"
        sx={{
          mt: 1,
          alignSelf: "end",
          position: "absolute",
          bottom: 0,
          right: 8,
          cursor: "pointer",
        }}
      >
        Photo by{" "}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </Typography>
    </Box>
  );
};

export default HeroSection;
