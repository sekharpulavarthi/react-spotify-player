import { EditorsPicksPlayListsItemsFetchedResposeTypes } from "../../types";

export class EditorsPicksPlayListItemModel {
  track: string;
  album: string;
  artist: string;
  addedAt: string;

  constructor(data: EditorsPicksPlayListsItemsFetchedResposeTypes) {
    this.track = data.track.name;
    this.album = data.track.album.name;
    this.artist = data.track.artists[0].name;
    this.addedAt = data.added_at;
  }
}
