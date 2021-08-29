import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
import { useState } from "react";
import { getCurrentUser } from "./firebase/firebase.utils";
const App = () => {
  const [user, setUser] = useState(getCurrentUser());

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
