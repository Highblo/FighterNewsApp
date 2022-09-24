import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { NewsRoutes } from "./NewsRoutes";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/news" render={({ match: {url} }) => (
        <Switch>
          {NewsRoutes.map((route) => (
            <Route 
              key={route.path} 
              path={`${url}${route.path}`}
              exact={route.exact}
            >
              <HeaderLayout>{route.children}</HeaderLayout>
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});