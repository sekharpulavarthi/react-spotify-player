import { HomeRouteFetchedResponseTypes } from "../../stores/types";

export interface HomeServiceType {
    editorsPicksServiceAPI: () => Promise<HomeRouteFetchedResponseTypes>;
    newReleasesServiceAPI: () => Promise<HomeRouteFetchedResponseTypes>;
}