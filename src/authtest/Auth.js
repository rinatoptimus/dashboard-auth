import React from "react";
import Signup from "./Signup";
//import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import AuthDashboard from "./AuthDashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import Dashboard from "../main/components/Dashboard";

function Auth() {
  return (
    <div>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              {/* <PrivateRoute exact path="/" component={AuthDashboard} /> */}
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />

              <Route path="/login" component={Login} />

              {/* <Route path="/dashboard" component={Dashboard} /> */}
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default Auth;
