import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './users/login_form_container';
import SignupFormContainer from './users/signup_form_container';
import MainComponent from './main_pages/main_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessDetailsContainer from './businesses/business_details_container';

const App = () => {
  return(
    <div>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/businesses/login" component={LoginFormContainer} />
      <AuthRoute exact path="/businesses/signup" component={LoginFormContainer} />
    
      <Route exact path="/" component={MainComponent} />
      <Route exact path="/users" component={MainComponent} />
      <Route exact path="/businesses" component={BusinessIndexContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessDetailsContainer} />
    </div>

  );
};
export default App;
