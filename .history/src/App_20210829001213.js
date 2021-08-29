import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
import SignInPage from "./component/sign-in/sign-in.component";
const App = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUpPage}></Route>
      <Route exact path="/signin" component={SignInPage}></Route>
    </Switch>
  );
};

export default App;
