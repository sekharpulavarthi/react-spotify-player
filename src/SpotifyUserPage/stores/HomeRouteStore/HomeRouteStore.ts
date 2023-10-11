import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constants";
import {
  HomeRouteFetchedResponseTypes,
  HomeRouteObjResponseTypes,
} from "../types";
import { HomeServiceType } from "../../services/HomeRouteServices";
import { HomeRouteModels } from "./models/HomeRouteModels";

export class HomeRouteStore {
  responseStatus: boolean; 
  constraint: string;
  responseData: HomeRouteObjResponseTypes;
  serviceApi: HomeServiceType;

  constructor(serviceApi: HomeServiceType) {
    makeAutoObservable(this);
    this.responseStatus = false;
    this.responseData = {
      message: "",
      playlists: {
        href: "",
        items: [],
        limit: 0,
        next: null,
        offset: 0,
        previous: null,
        total: 0,
      },
      responseStatus: false,
    };
    this.constraint = constraints.initial;
    this.serviceApi = serviceApi;
  }

  updateResponseData = (response: HomeRouteFetchedResponseTypes): void => {
    if (response.responseStatus) {
      this.constraint = constraints.success;
      this.responseStatus = response.responseStatus;
      this.responseData = new HomeRouteModels(response);
    }
  };

  fetchHomeRouteEditorsData = async (): Promise<void> => {
    const response = await this.serviceApi.editorsPicksServiceAPI();
    this.constraint = constraints.loading;
    this.updateResponseData(response);
  };

  fetchHomeRouteNewReleasesData = async (): Promise<void> => {
    const response = await this.serviceApi.newReleasesServiceAPI();
    this.constraint = constraints.loading;
    console.log(response, "response")
    this.updateResponseData(response);
  };
}
