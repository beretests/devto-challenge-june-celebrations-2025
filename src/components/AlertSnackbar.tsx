import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useAlertStore } from "../stores/alertStore";

const AlertSnackbar: React.FC = () => {
  const { open, message, severity, hideAlert } = useAlertStore();
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={hideAlert}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={hideAlert} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
