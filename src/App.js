import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { Route, BrowserRouter } from "react-router-dom";

import { pageTitle, navLinks } from "./config";

// Components
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title={pageTitle} items={navLinks} />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
