import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomeRoute from "./SpotifyUserPage/routes/HomeRoute";
import ProtectedRoute from "./Common/components/ProtectedRoute";
import "./App.css";
import { HomeRouteHook } from "./SpotifyUserPage/hooks/useEditorsPicksHooks";
import { HomeRouteNewReleasesHook } from "./SpotifyUserPage/hooks/useHomeNewReleasesHook";
import { HomeRouteGenresMoodsHook } from "./SpotifyUserPage/hooks/useGenresMoodsHook";

const App = (): JSX.Element => (
  <BrowserRouter>
    <HomeRouteHook>
      <HomeRouteNewReleasesHook>
        <HomeRouteGenresMoodsHook>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/playlists/:id" component={HomeRoute} />
          </Switch>
        </HomeRouteGenresMoodsHook>
      </HomeRouteNewReleasesHook>
    </HomeRouteHook>
  </BrowserRouter>
);

export default App;
