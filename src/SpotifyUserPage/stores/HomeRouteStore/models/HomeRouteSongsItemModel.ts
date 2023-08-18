import {
  HomeRouteSongModelFetchedTypes,
  HomeRouteEditorsPicksImagesTypes,
} from "../../types";

export class HomeRouteSongItemModel {
  collaborative: boolean;
  description: string;
  externalUrls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<HomeRouteEditorsPicksImagesTypes>;
  name: string;
  owner: {
    displayName: string;
    externalUrls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primaryColor: null;
  public: null;
  snapshotId: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;

  constructor(data: HomeRouteSongModelFetchedTypes) {
    this.collaborative = data.collaborative;
    this.description = data.description;
    this.externalUrls = data.external_urls;
    this.href = data.href;
    this.id = data.id;
    this.images = data.images;
    this.name = data.name;
    this.owner = {
      displayName: data.owner.display_name,
      externalUrls: data.owner.external_urls,
      href: data.owner.href,
      id: data.owner.id,
      type: data.owner.type,
      uri: data.owner.uri,
    };
    this.primaryColor = data.primary_color;
    this.public = data.public;
    this.snapshotId = data.snapshot_id;
    this.tracks = data.tracks;
    this.type = data.type;
    this.uri = data.uri;
  }
}
