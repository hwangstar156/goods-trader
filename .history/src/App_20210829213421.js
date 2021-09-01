import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    console.log("load");
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });

    unsubscribeFromAuth();
    console.log(user);
  }, []);

  const signOut = () => {
    console.log("signout");
    setIsLoggedIn(false);
    auth.signOut();
  };

  return (
    <>
      <Switch>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route
          exact
          path="/signin"
          render={() => (user ? <Redirect to="/" /> : <SignInPage />)}
        />
      </Switch>
      {isLoggedIn ? <div onClick={signOut}>log ot</div> : null}
      {user ? <div>{user.displayName}</div> : null}
    </>
  );
};

export default App;
