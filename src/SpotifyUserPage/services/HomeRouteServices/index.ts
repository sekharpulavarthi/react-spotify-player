import {
  HomeRouteFetchedResponseTypes,
  HomeRouteFetchedNewReleasesResponseTypes,
  HomeRouteGenresMoodsResponseFetchedTypes,
} from "../../stores/types";

export interface HomeServiceType {
  editorsPicksServiceAPI: () => Promise<HomeRouteFetchedResponseTypes>;
  newReleasesServiceAPI: () => Promise<
    HomeRouteFetchedNewReleasesResponseTypes
  >;
  genresMoodsServiceAPI: () => Promise<
    HomeRouteGenresMoodsResponseFetchedTypes
  >;
}
