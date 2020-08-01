import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterVideo from "./pages/RegisterVideo";
import RegisterCategories from "./pages/RegisterCategories";
import Page404 from "./pages/Page404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/categories" component={RegisterCategories} />
      <Route component={Page404} />
    </Switch>
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById("root")
);
