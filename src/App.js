import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Location from "./Pages/Location";
import PageNotFound from "./Pages/404";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/location/:id">
                    <Location />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;