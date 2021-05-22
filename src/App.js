import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@theme-ui/theme-provider";
import TodoList from "./components/TodoList/TodoList";
import theme from "./shared/theme";
import Loading from "./components/Loading/Loading";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import "./App.scss";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/test" component={Loading} />
        <Route exact path="/task/:id" component={TaskDetails} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
