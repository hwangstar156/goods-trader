import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("load");
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

    return unsubscribeFromAuth();
  }, []);

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
      {user ? <div>{user.displayName}</div> : null}
    </>
  );
};

export default App;
