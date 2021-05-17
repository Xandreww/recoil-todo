import { ThemeProvider } from "@theme-ui/theme-provider";
import "./App.scss";
import Home from "./components/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
