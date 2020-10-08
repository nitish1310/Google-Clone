import React from "react";

import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* <SearchPage /> */}
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* Home (with Search on) */}

        {/* SearchPage (Results page) */}
      </Router>
    </div>
  );
}

export default App;
