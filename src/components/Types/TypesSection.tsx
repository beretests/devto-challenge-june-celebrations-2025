import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import typesData from "./Types.json";

const TypesSection: React.FC = () => {
  return (
    <Box
      id="types"
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "surface.main",
        color: "surface.contrastText",
        alignItems: "center",
        px: 2,
        py: 6,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Types of Goat Cheese
        </Typography>
        <Grid container spacing={4}>
          {typesData.map((item, idx) => (
            <Grid
              size={{ xs: 12, md: 4, sm: 6, lg: 3 }}
              sx={{ cursor: "pointer", pt: 2 }}
              key={idx}
            >
              <Card
                sx={{
                  height: "100%",
                }}
                raised
              >
                <CardMedia
                  component="img"
                  height="160"
                  src={item.image}
                  alt={item.title}
                  sx={{ objectFit: "fit", maxHeight: "160px" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.text}</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    Photo by{" "}
                    <a
                      href={item.creditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.credit}
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TypesSection;
