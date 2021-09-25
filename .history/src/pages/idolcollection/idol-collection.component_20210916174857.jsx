import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import IdolCollection from "../../component/idol-collection/idol-collection.component";
const IdolCollectionPage = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h1>포토카드</h1>
      <Switch>
        <Route path={`${match.path}`}>
          <h3>안녕</h3>
        </Route>
        <Route path={`${match.path}/:id`}>
          <h3>시발</h3>
          <IdolCollection />
        </Route>
      </Switch>
    </div>
  );
};

export default IdolCollectionPage;
