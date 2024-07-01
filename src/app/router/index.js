"use client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../page";
import { BlogPost } from "../views/blog";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
