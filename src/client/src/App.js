import React from 'react';
import { useMemo, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import auth from './api/auth';
import AppContainer from './components/AppContainer.tsx';
import PublicRoute from './components/routing/PublicRoute';
import PrivateRoute from './components/routing/PrivateRoute';
import { AuthContext } from './context';

// import pages
import LoginPage from './pages/authflow/LoginPage.tsx';
import RegisterPage from './pages/authflow/RegisterPage.tsx';
import IndexPage from './pages/IndexPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import Map from './components/Map.tsx';
import Card from './components/Card.tsx';
import CardList from './components/CardList.tsx';
import ExpandedCard from './components/ExpandedCard.tsx';
import CardWrapper from './components/CardWrapper.tsx';

const queryCache = new QueryCache();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => auth.isAuthenticated
  );

  const authContextValue = useMemo(
    () => ({
      isAuthenticated,
      login: async (email, password) => {
        // This function call throws in the case of invalid credentials
        await auth.login(email, password);
        setIsAuthenticated(true);
        queryCache.clear();
      },
      logout: () => {
        auth.logout();
        setIsAuthenticated(false);
        queryCache.clear();
      },
    }),
    [isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        <AppContainer>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <main>
              <Switch>
                <PublicRoute exact path="/" component={IndexPage} />
                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />
                <PublicRoute exact path="/map" component={Map} />

                <PublicRoute
                  exact
                  path="/cardwrapper"
                  component={CardWrapper}
                />
                <PublicRoute
                  exact
                  path="/dashboard"
                  component={DashboardPage}
                />
                <Route exact={false} component={NotFoundPage} />
              </Switch>
            </main>
          </ReactQueryCacheProvider>
        </AppContainer>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
