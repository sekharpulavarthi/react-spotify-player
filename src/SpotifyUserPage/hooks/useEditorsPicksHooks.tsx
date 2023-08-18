import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";

import { HomeRouteServiceAPI } from "../services/HomeRouteServices/index.api";

import { HomeRouteStore } from "../stores/HomeRouteStore/HomeRouteStore";

const homeRouteServiceInstance = new HomeRouteServiceAPI()

const homeRouteStoreInstance = new HomeRouteStore(homeRouteServiceInstance)

const HomeRouteContext = createContext(homeRouteStoreInstance)

export const HomeRouteHook = ({children}: ChildProps) => (
    <HomeRouteContext.Provider value={homeRouteStoreInstance}>
        {children}
    </HomeRouteContext.Provider>
)

export const useHomeEditorsPicksHook = () => useContext(HomeRouteContext)