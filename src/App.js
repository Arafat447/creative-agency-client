import React from 'react';
import './App.css';
import Home from './Components/Home/HomeMain/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import AddService from './Components/Dashboard/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import UserReview from './Components/Dashboard/DashboardMain/UserReview/UserReview';
import UserServiceList from './Components/Dashboard/UserServiceList/UserServiceList';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import NotFound from './Components/NotFound/NotFound';
import AllUserServiceList from './Components/Dashboard/AllUserServiceList/AllUserServiceList';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (

    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/order/:id" >
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order" >
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/userServiceList" >
            <UserServiceList />
          </PrivateRoute>
          <PrivateRoute path="/allUserServiceList" >
            <AllUserServiceList></AllUserServiceList>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin" >
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/review" >
            <UserReview></UserReview>
          </PrivateRoute>
          <PrivateRoute path="/addService" >
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard" >
            <DashboardMain></DashboardMain>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
