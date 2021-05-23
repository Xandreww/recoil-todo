import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@theme-ui/theme-provider";
import TodoList from "./components/TodoList/TodoList";
import theme from "./shared/theme";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import "./App.scss";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/task/:id" component={TaskDetails} />
        <Route exact path="/task/:id/edit" component={TaskDetails} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
