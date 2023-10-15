import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constants";
import { EditorsPicksPlayListServiceType } from "../../services/EditorsPicksPlayListRouteServices";
import {
  EditorsPicksPlayListsFetchedResposeTypes,
  EditorsPicksPlayListsResposeObjTypes,
  EditorsPicksSongItemDetails,
} from "../types";
import { EditorsPicksPlayListHeader } from "./models/EditorsPicksPlayListHeader";

export class EditorsPicksPlayListStore {
  responseStatus: boolean;
  constraint: string;
  responseData: EditorsPicksPlayListsResposeObjTypes;
  serviceApi: EditorsPicksPlayListServiceType;
  resultObj: EditorsPicksSongItemDetails;

  constructor(serviceApi: EditorsPicksPlayListServiceType) {
    makeAutoObservable(this);
    this.responseStatus = false;
    this.constraint = constraints.initial;

    this.responseData = {
      image: "",
      name: "",
      items: [],
      responseStatus: false,
    };
    this.serviceApi = serviceApi;
    this.resultObj = {
      track: "",
      album: "",
      artist: "",
      addedAt: "",
      previewUrl: "",
      id: "",
    };
  }

  getSongItemData = (id: string) => {
    const resultObj = this.responseData.items.find((item) => item.id === id);
    return resultObj;
  };

  updateResponseData = (
    response: EditorsPicksPlayListsFetchedResposeTypes
  ): void => {
    if (response.responseStatus) {
      this.constraint = constraints.success;
      this.responseStatus = response.responseStatus;
      this.responseData = new EditorsPicksPlayListHeader(response);
    }
  };

  fetchEditorsPicksPlayListData = async (id: string): Promise<void> => {
    const response = await this.serviceApi.editorsPicksPlayListServiceAPI(id);
    console.log(response);
    this.constraint = constraints.loading;
    this.updateResponseData(response);
  };
}
