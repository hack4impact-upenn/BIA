import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = (props) => {
  console.log(props.exact);
  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

export default PublicRoute;
