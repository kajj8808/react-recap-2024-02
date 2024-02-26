import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Marvelous React";
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/character/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
