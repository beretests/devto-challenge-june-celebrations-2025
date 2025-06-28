import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsData from "./FAQs.json";
import React, { useState } from "react";

const FAQsSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(faqsData.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const visibleFaqs = faqsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box
      id="faqs"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        backgroundColor: "background.paper",
        alignItems: "center",
        px: 2,
        py: { xs: 4, md: 0 },
        position: "relative",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          FAQs
        </Typography>
        {visibleFaqs.map((faq, i) => (
          <Accordion
            key={startIndex + i}
            expanded={expanded === startIndex + i}
            onChange={() =>
              setExpanded(expanded === startIndex + i ? false : startIndex + i)
            }
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            variant="outlined"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            sx={{ zIndex: 56 }}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={page >= totalPages - 1}
          >
            Next
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default FAQsSection;
