import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { Route, BrowserRouter } from "react-router-dom";

import { pageTitle, navLinks } from "./config";

// Components
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title={pageTitle} items={navLinks} />
        <main className="content">
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
