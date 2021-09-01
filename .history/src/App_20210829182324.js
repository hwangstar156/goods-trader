import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });

    unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route exact path="/signin" component={SignInPage}></Route>
      </Switch>
      {user ? <div className="user-name">{user.displayName}</div> : null}
      {user ? <div className="kakao-id">{user.kakaoId}</div> : null}
    </>
  );
};

export default App;
