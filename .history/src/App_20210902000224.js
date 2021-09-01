import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import UserProfilePage from "./pages/userprofile/userprofile.pages";
import React, { useEffect } from "react";

import HomePage from "./pages/homepage.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route exact path="/profile" component={UserProfilePage}></Route>
      </Switch>
    </>
  );
};

export default App;
