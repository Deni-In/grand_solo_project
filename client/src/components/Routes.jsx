import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AllSchoolsPage from "./pages/AllSchoolsPage";
import SingleSchoolPage from "./pages/SingleSchoolPage";
import SchoolsByCategoryPage from "./pages/SchoolsByCategoryPage";
import Header from "./Header";
import Admin from "./pages/Admin";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <AllSchoolsPage />
      </Route>
      <Route path="/school/:id">
        <SingleSchoolPage />
      </Route>
      <Route path="/category/:categoryId">
        <SchoolsByCategoryPage />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
