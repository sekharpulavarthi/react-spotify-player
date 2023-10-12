import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constants";
import { HomeServiceType } from "../../services/HomeRouteServices";
import {
  HomeRouteGenresMoodsResponseObjTypes,
  HomeRouteGenresMoodsResponseFetchedTypes,
} from "../types";
import { HomeRouteGenresMoodsModel } from "./models/HomeRouteGenresMoodsModel";

export class HomeRouteGenresMoodsStore {
  responseStatus: boolean;
  constraint: string;
  responseData: HomeRouteGenresMoodsResponseObjTypes;
  serviceApi: HomeServiceType;

  constructor(serviceApi: HomeServiceType) {
    makeAutoObservable(this);
    this.responseStatus = false;
    this.constraint = constraints.initial;
    this.responseData = {
      categories: {
        href: "",
        items: [],
        total: 0,
      },
      responseStatus: false,
    };
    this.serviceApi = serviceApi;
  }

  updateResponseData = (
    response: HomeRouteGenresMoodsResponseFetchedTypes
  ): void => {
    if (response.responseStatus) {
      this.constraint = constraints.success;
      this.responseStatus = response.responseStatus;
      this.responseData = new HomeRouteGenresMoodsModel(response);
    }
  };

  fetchHomeGenresMoodsData = async (): Promise<void> => {
    const response = await this.serviceApi.genresMoodsServiceAPI();
    this.constraint = constraints.loading;

    this.updateResponseData(response);
  };
}
