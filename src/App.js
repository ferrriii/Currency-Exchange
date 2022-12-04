import { ThemeProvider } from '@mui/material/styles';
import "./styles/global.css";
import theme from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;