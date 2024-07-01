"use client";
import { useState } from "react";
import { Nav, Navbar, Sidebar } from "./views/test.js";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BlogPost } from "./views/blog.js";
export default function Home() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Nav/>
          </Route>
          <Route path="/blog">
            <BlogPost/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
