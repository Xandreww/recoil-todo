import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ThemeProvider } from "@theme-ui/theme-provider";
import TodoList from "./components/TodoList/TodoList";
import theme from "./shared/theme";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import { useRecoilValue } from "recoil";
import { getTodosState } from "./recoil/selectors";
import "./App.scss";

function App() {
  const { totalNum } = useRecoilValue(getTodosState);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={TodoList} />
        {totalNum && (
          <>
            <Route exact path="/task/:id" component={TaskDetails} />
            <Route exact path="/task/:id/edit" component={TaskDetails} />
          </>
        )}
        <Redirect to="/" />
      </ThemeProvider>
    </Router>
  );
}

export default App;
