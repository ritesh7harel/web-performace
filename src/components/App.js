import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const AppDev = React.lazy(() =>
  import(/* webpackChunkName: "dev-page" */ "./dev/01")
);
const AppProd = React.lazy(() =>
  import(/* webpackChunkName: "prod-page" */ "./prod/01")
);

const App = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route exact path="/01/dev">
            <AppDev />
          </Route>
          <Route exact path="/01/prod">
            <AppProd />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

const Home = () => {
  return (
    <>
      <div>
        <Link to="/01/dev">dev</Link>
      </div>
      <div>
        <Link to="/01/prod">prod</Link>
      </div>
    </>
  );
};

export default App;
