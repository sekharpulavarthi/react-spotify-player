import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";

import { HomeRouteServiceAPI } from "../services/HomeRouteServices/index.api";

import { HomeRouteGenresMoodsStore } from "../stores/HomeRouteGenresMoodsStore/HomeRouteGenresMoodsStore";

const homeRouteServiceInstance = new HomeRouteServiceAPI();

const homeRouteGenresMoodsInstance = new HomeRouteGenresMoodsStore(
  homeRouteServiceInstance
);

const HomeRouteGenresMoodsContext = createContext(homeRouteGenresMoodsInstance);

export const HomeRouteGenresMoodsHook = ({ children }: ChildProps) => (
  <HomeRouteGenresMoodsContext.Provider value={homeRouteGenresMoodsInstance}>
    {children}
  </HomeRouteGenresMoodsContext.Provider>
);

export const useGenresMoodsHook = () => useContext(HomeRouteGenresMoodsContext);
