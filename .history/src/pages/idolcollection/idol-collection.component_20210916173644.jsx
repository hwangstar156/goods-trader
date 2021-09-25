import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import IdolCollection from "../../component/idol-collection/idol-collection.component";
const IdolCollectionPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h1>포토카드</h1>
      <Switch>
        <Route exact path={`${match.path}/:id`}>
          <IdolCollection />
        </Route>
        <Route path={`${match.path}`}>
          <h3>안녕</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default IdolCollectionPage;
