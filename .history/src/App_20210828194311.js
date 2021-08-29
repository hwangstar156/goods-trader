import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./component/sign-up/sign-up.component";
const App = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUpPage}></Route>
    </Switch>
  );
};

export default App;
