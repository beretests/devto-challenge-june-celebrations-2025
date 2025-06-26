import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useInView } from "framer-motion";

const benefits = [
  "Easier to digest than cow’s milk cheese",
  "Lower in fat and calories",
  "Rich in calcium and probiotics",
  "Perfect for lactose-sensitive individuals",
];

const BenefitsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(false);
      const timeout = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <Box
      id="benefits"
      ref={ref}
      sx={{
        height: "100vh",
        display: "flex",
        backgroundColor: "background.paper",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Why Goat Cheese?
          </Typography>
          <List
            sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}
          >
            {visible &&
              benefits.map((benefit, index) => (
                <motion.div
                  key={`${index}-${visible}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ListItem
                    disablePadding
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CheckCircleIcon color="secondary" fontSize="small" />
                    <ListItemText
                      primary={
                        <Typography variant="body1" component="span">
                          {benefit}
                        </Typography>
                      }
                    />
                  </ListItem>
                </motion.div>
              ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
