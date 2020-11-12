import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/savedBooks";
import Books from "./pages/books";
import Nav from "./components/Nav/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books}></Route>
          <Route exact path="/savedbooks" component={SavedBooks}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
