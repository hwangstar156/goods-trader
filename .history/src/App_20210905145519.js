import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import UserProfileContainer from "./pages/userprofile/userprofile.container";
import React, { useEffect } from "react";
import Header from "./component/header/header.component";
import HomePage from "./pages/homepage.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import WritePage from "./pages/write/write.pages";
const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route exact path="/profile" component={UserProfileContainer}></Route>
        <Route exact path="/write" component={WritePage}></Route>
      </Switch>
    </>
  );
};

export default App;
