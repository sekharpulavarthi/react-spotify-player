import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";

import { HomeRouteServiceAPI } from "../services/HomeRouteServices/index.api";

import { HomeRouteNewReleasesStore } from "../stores/HomeRouteNewReleasesStore/HomeRouteNewReleasesStore";

const homeRouteServiceInstance = new HomeRouteServiceAPI()

const homeRouteNewReleasesStoreInstance = new HomeRouteNewReleasesStore(homeRouteServiceInstance)


const HomeRouteNewReleasesContext = createContext(homeRouteNewReleasesStoreInstance)

export const HomeRouteNewReleasesHook = ({children}: ChildProps) => (
    <HomeRouteNewReleasesContext.Provider value={homeRouteNewReleasesStoreInstance}>
        {children}
    </HomeRouteNewReleasesContext.Provider>
)

export const useHomeNewReleasesHook = () => useContext(HomeRouteNewReleasesContext)