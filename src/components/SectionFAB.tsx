import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Zoom } from "@mui/material";
import React from "react";

interface SectionFABProps {
  scrollTo: (section: string) => void;
  showScrollTop: boolean;
}

const SectionFAB: React.FC<SectionFABProps> = ({ scrollTo, showScrollTop }) => {
  return (
    // <Box
    //   role="presentation"
    //   sx={{
    //     position: "absolute",
    //     bottom: 24,
    //     right: 16,
    //   }}
    //   onClick={() => scrollTo("hero")}
    // >
    //   <Fab color="secondary" size="small" aria-label="scroll back to top">
    //     <KeyboardArrowUpIcon />
    //   </Fab>
    // </Box>
    <Zoom in={showScrollTop}>
      <Box
        role="presentation"
        sx={{ position: "fixed", bottom: 80, right: 340, zIndex: 1300 }}
        onClick={() => scrollTo("hero")}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default SectionFAB;
