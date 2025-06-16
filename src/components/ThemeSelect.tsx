import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useThemeStore } from "../stores/themeStore";

const ThemeSelect = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        px: 1,
        pb: 0.5,
        borderRadius: 2,
      }}
    >
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="select-theme-label">Theme</InputLabel>
        <Select
          labelId="select-theme-label"
          id="select-theme"
          value={theme}
          label="Theme"
          onChange={(e) =>
            setTheme(e.target.value as "light" | "dark" | "system")
          }
        >
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"dark"}>Dark</MenuItem>
          <MenuItem value={"system"}>System</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ThemeSelect;
