import {
  EditorsPicksPlayListsFetchedResposeTypes,
  EditorsPicksSongItemDetails,
} from "../../types";

import { EditorsPicksPlayListItemModel } from "./EditorsPicksPlayListItemModel";

export class EditorsPicksPlayListHeader {
  image: string;
  name: string;
  items: Array<EditorsPicksSongItemDetails>;
  responseStatus: boolean;

  constructor(data: EditorsPicksPlayListsFetchedResposeTypes) {
    this.image = data.images[0].url;
    this.name = data.name;
    this.items = data.tracks.items.map(
      (item) => new EditorsPicksPlayListItemModel(item)
    );
    this.responseStatus = data.responseStatus;
  }
}
