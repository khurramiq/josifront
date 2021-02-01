import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import MyTests from "../pages/myTests";
import TakeTest from "../pages/takeTest";
import Answers from "../pages/answers";
import Survey from "../pages/survey";

export default () => {    
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my-tests" component={MyTests} />
      <Route exact path="/take-test" component={TakeTest} />
      <Route exact path="/answers" component={Answers} />
      <Route exact path="/survey" component={Survey} />
    </Switch>
  );
};
