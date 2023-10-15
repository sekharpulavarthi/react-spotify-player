import { EditorsPicksPlayListsItemsFetchedResposeTypes } from "../../types";

export class EditorsPicksPlayListItemModel {
  track: string;
  album: string;
  artist: string;
  addedAt: string;
  previewUrl: string;
  id: string;

  constructor(data: EditorsPicksPlayListsItemsFetchedResposeTypes) {
    this.track = data.track.name;
    this.album = data.track.album.name;
    this.artist = data.track.artists[0].name;
    this.addedAt = data.added_at;
    this.previewUrl = data.track.preview_url;
    this.id = data.track.id;
  }
}
