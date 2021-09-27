import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Header from "./component/header/header.component";
import HomePage from "./pages/homepage.component";
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(user);
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

    return unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/signin"
          render={() => (user ? <Redirect to="/" /> : <SignInPage />)}
        />
      </Switch>
    </>
  );
};

export default App;