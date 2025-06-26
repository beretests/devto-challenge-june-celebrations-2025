import { create } from "zustand";

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
  showAlert: (message: string, severity?: AlertState["severity"]) => void;
  hideAlert: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  open: false,
  message: "",
  severity: "info",
  showAlert: (message, severity = "info") =>
    set({ open: true, message, severity }),
  hideAlert: () => set({ open: false }),
}));
