import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import Banner from 'components/Banner'; // Import the Banner component
import Fallback from 'components/Fallback'

// Lazy loading of pages
const Default = React.lazy(() => import('./pages/default'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Rush = React.lazy(() => import('./pages/rush'))
const Brothers = React.lazy(() => import('./pages/brothers'))
const Consulting = React.lazy(() => import('./pages/consulting'))
//
function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Route exact path="/">
          <Default />
        </Route>
        <Route path="/rush">
          <Rush />
        </Route>
        <Route path="/consulting">
          <Consulting />
        </Route>
        <Route path="/brothers">
          <Brothers />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router

/*
import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { actions } from 'slices/app.slice';
import { path } from 'utils/const';
import Fallback from 'components/Fallback';
import Spinner from 'components/Spinner';
import Navbar from 'components/Navbar'; // Make sure to import the Navbar component

const Default = React.lazy(() => import('./pages/default'));
const Auth = React.lazy(() => import('./pages/auth'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));

function Router() {
  const dispatch = useDispatch();
  const { checked, loggedIn } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.authenticate());
  }, [dispatch]); // Dependency array added

  if (!checked) {
    return (
      <div className="app-loader-container">
        <Spinner size="4rem" color="white" isLoading />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        {!loggedIn ? (
          <Switch>
            <Route exact path="/">
              <Default />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path={path.dashboard}>
              <Dashboard />
            </Route>
            <Redirect to={path.dashboard} />
          </Switch>
        )}
      </Suspense>
    </BrowserRouter>
  );
  
}

export default Router;


















// original routing, / -> Auth
/*   return (
  <BrowserRouter>
  <Suspense fallback={<Fallback />}>
    {!loggedIn ? (
      <Switch>
        <Route path="/">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route path={path.dashboard}>
          <Dashboard />
        </Route>
        <Redirect to={path.dashboard} />
      </Switch>
    )}
  </Suspense>
</BrowserRouter>
)
} */
