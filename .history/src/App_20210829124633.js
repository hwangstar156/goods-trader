import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import { useState } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });

    return unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route exact path="/signin" component={SignInPage}></Route>
      </Switch>
      {user ? <div className="user-name">{user.displayName}</div> : null}
    </>
  );
};

export default App;
