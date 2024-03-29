import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constants";
import { HomeServiceType } from "../../services/HomeRouteServices";
import {
  HomeRouteFetchedNewReleasesResponseTypes,
  HomeRouteNewReleasesResponseObjTypes,
} from "../types";
import { HomeRouteNewReleasesModel } from "./models/HomeRouteNewReleasesModel";

export class HomeRouteNewReleasesStore {
  responseStatus: boolean;
  constraint: string;
  responseData: HomeRouteNewReleasesResponseObjTypes;
  serviceApi: HomeServiceType;

  constructor(serviceApi: HomeServiceType) {
    makeAutoObservable(this);
    this.responseStatus = false;
    this.constraint = constraints.initial;
    this.responseData = {
      albums: {
        href: "",
        items: [],
        total: 0,
      },
      responseStatus: false,
    };
    this.serviceApi = serviceApi;
  }

  updateResponseData = (
    response: HomeRouteFetchedNewReleasesResponseTypes
  ): void => {
    if (response.responseStatus) {
      this.constraint = constraints.success;

      this.responseStatus = response.responseStatus;
      this.responseData = new HomeRouteNewReleasesModel(response);
    }
  };

  fetchHomeRouteNewReleasesData = async (): Promise<void> => {
    const response = await this.serviceApi.newReleasesServiceAPI();
    this.constraint = constraints.loading;

    this.updateResponseData(response);
  };
}
