import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useEventAnimation } from "../../stores/eventAnimationStore";
import events from "./Events";

const EventsSection: React.FC = () => {
  const { triggerAnimation, reset } = useEventAnimation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (triggerAnimation) {
      setShouldAnimate(true);
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
        reset();
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [triggerAnimation]);

  return (
    <motion.section
      id="events"
      aria-label="Events"
      initial={false}
      animate={
        shouldAnimate
          ? {
              scale: [1, 1.05, 1],
              opacity: [1, 0.3, 1, 0.3, 1],
              transition: { duration: 0.9 },
            }
          : {}
      }
    >
      <Paper elevation={1} sx={{ p: 2, mt: 4 }} id="events">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Upcoming Events
        </Typography>
        <Typography gutterBottom>
          Celebrate Goat Cheese Day in style! Check out what's happening near
          you:
        </Typography>
        <List>
          {events.map((item, idx) => (
            <ListItem
              key={idx}
              alignItems="flex-start"
              disablePadding
              sx={{ mb: 1 }}
            >
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontWeight: "medium" },
                  },
                }}
                primary={`${item.date}: ${item.event}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </motion.section>
  );
};

export default EventsSection;
