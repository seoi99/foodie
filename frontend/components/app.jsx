import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './users/login_form_container';
import SignupFormContainer from './users/signup_form_container';
import MainComponent from './main_pages/main_container';

const App = () => {
  return(
    <div>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />

      <Route exact path="/" component={MainComponent} />
      <Route exact path="/users" component={MainComponent} />
    </div>

  )
};
export default App;
