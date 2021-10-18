import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./styles/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
