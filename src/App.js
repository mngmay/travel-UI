import React from "react";
import { Route, Switch } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header/Header";
import Clouds from "./components/Clouds";
import Footer from "./components/Footer/Footer";

import Dashboard from "./components/views/Dashboard";
import About from "./components/views/About";
import Resources from "./components/views/Resources";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Clouds />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
      </Switch>
      <Footer />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
