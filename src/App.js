import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@theme-ui/theme-provider";
import "./App.scss";
import Home from "./components/Home";
import theme from "./theme";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Home} />
        <Route exact path="/task/:id" component={TaskDetails} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
