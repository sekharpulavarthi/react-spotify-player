import { HomeRouteFetchedResponseTypes } from "../../stores/types";

export interface HomeServiceType {
    editorsPicksServiceAPI: () => Promise<HomeRouteFetchedResponseTypes>;
}