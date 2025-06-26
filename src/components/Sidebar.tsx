import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useAlertStore } from "../stores/alertStore";

const SidebarSection: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const showAlert = useAlertStore((state) => state.showAlert);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }

    setEmailError("");
    showAlert(`Subscribed successfully with ${email}`, "success");
    setEmail("");
  };

  return (
    <Box
      sx={{
        width: isMdUp ? 320 : "100%",
        position: isMdUp ? "sticky" : "static",
        top: 0,
        height: "100vh",
        borderLeft: isMdUp ? "1px solid #ddd" : "none",
        bgcolor: "#F3E5F5",
        p: 3,
        overflowY: "auto",
      }}
    >
      <Paper elevation={1} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Share Your Love
        </Typography>
        <Typography gutterBottom>
          Use <strong>#GoatCheeseDay</strong> to show off your favorite goat
          cheese moments!
        </Typography>
        <List>
          {[
            "Tag us on Instagram",
            "Submit your photos",
            "Tell us your goat cheese story",
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Newsletter Signup
        </Typography>
        <Typography gutterBottom>
          Get the latest goat cheese recipes and deals. Sign up and receive a
          free recipe PDF and exclusive discounts!
        </Typography>
        <TextField
          fullWidth
          id="email"
          label="Your email"
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          sx={{ my: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>
      </Paper>

      <Paper elevation={1} sx={{ p: 2, mt: 4 }} id="events">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Upcoming Events
        </Typography>
        <Typography gutterBottom>
          Celebrate Goat Cheese Day in style! Check out what's happening near
          you:
        </Typography>
        <List>
          {[
            { date: "June 27", event: "Goat Cheese Tasting – Toronto" },
            { date: "June 28", event: "Live Farm Tour – Online" },
            { date: "June 29", event: "Recipe Contest Deadline" },
          ].map((item, idx) => (
            <ListItem
              key={idx}
              alignItems="flex-start"
              disablePadding
              sx={{ mb: 1 }}
            >
              <ListItemText
                primaryTypographyProps={{ fontWeight: "medium" }}
                primary={`${item.date}: ${item.event}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default SidebarSection;
