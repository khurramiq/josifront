import React,{ useEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import { recentSurvey, getAllUserSurveys } from "../redux/actions/surveyActions";
import { useDispatch } from "react-redux";
const MyTests = lazy(() => import("../pages/myTests"));
const TakeTest = lazy(() => import("../pages/takeTest"));
const Answers = lazy(() => import("../pages/answers"));
const Survey = lazy(() => import("../pages/survey"));

export default () => {   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserSurveys());
    dispatch(recentSurvey());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
