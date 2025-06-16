// import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import PopoverMenu from "./PopOverMenu";
import ProTip from "./ProTip";
import { ThemeProvider } from "./components/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Header />
      <Container maxWidth="sm">
        <div className="my-4">
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite example with Tailwind CSS in TypeScript
          </Typography>
          <Slider
            className="my-4"
            defaultValue={30}
            classes={{ active: "shadow-none" }}
            slotProps={{ thumb: { className: "hover:shadow-none" } }}
          />
          <PopoverMenu />
          <ProTip />
          <Copyright />
        </div>
      </Container>
    </ThemeProvider>
  );
}
