import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context';

//Componetes/pages that don't need login

const PrivateRoute = (props) => {
  const auth = useContext(AuthContext);

  return auth.isAuthenticated ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
