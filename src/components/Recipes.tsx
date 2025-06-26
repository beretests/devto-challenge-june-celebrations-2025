import { Box, Button, Container, Typography } from "@mui/material";
import RecipeImage from "../assets/images/recipes/20250617_1417_Goat Cheese Recipes_simple_compose_01jxzrg4ekf8yv2cp4ygz5ys7x.png";
import React from "react";
import { useAlertStore } from "../stores/alertStore";

const RecipesSection: React.FC = () => {
  const showAlert = useAlertStore((state) => state.showAlert);
  const handleDownload = () => {
    showAlert(`Recipe booklet download successful`, "success");
  };
  return (
    <Box
      id="recipes"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={RecipeImage}
        alt="Goat cheese recipes"
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
      <Container maxWidth="md" sx={{ zIndex: 2 }}>
        <Box sx={{ color: "primary.contrastText", p: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Recipes & Pairings
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ pb: 2 }}>
            Discover delicious ways to enjoy goat cheese with our curated
            recipes and pairing suggestions. From fresh salads to warm tarts,
            there’s something for every palate.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleDownload}
          >
            Download Recipe Booklet
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RecipesSection;
