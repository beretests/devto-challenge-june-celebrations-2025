import { ThemeProvider } from "./components/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import AboutSection from "./components/About";
import SectionFAB from "./components/SectionFAB";
import FAQsSection from "./components/FAQs/FAQs";
import RecipesSection from "./components/Recipes";
import SidebarSection from "./components/Sidebar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/Benefits/BenefitsSection";
import TypesSection from "./components/Types/TypesSection";
import AlertSnackbar from "./components/AlertSnackbar";

export default function App() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Header />
      {/* Main Layout */}
      <Box display="flex" flexDirection={isMdUp ? "row" : "column"}>
        <Box flex={1}>
          <HeroSection />
          <AboutSection />
          <BenefitsSection />
          <TypesSection />
          <RecipesSection />
          <FAQsSection />
          <SectionFAB scrollTo={scrollTo} showScrollTop={showScrollTop} />
          <Footer />
        </Box>

        <SidebarSection />
        <AlertSnackbar />
      </Box>
    </ThemeProvider>
  );
}
