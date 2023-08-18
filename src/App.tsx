import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import HomeRoute from './SpotifyUserPage/routes/HomeRoute'
import ProtectedRoute from './Common/components/ProtectedRoute'
import './App.css'
import { HomeRouteHook } from './SpotifyUserPage/hooks/useEditorsPicksHooks';

const App = (): JSX.Element => (
  <BrowserRouter>
  <HomeRouteHook>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path = "/" component={HomeRoute}/>
    </Switch>
    </HomeRouteHook>
    </BrowserRouter>
)

export default App