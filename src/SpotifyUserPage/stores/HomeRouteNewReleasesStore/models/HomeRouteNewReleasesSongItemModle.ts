import {
    HomeRouteNewReleasesSongModelFetchedTypes,
    HomeRouteNewReleasesImagesTypes,
    HomeRouteNewReleasesArtistsArrayObjTypes
  } from "../../types";

  import {HomeRouteArtistsModel} from './HomeRouteArtistsModel'
  
  export class HomeRouteNewReleasesSongItemModel {
    albumType : string;
    artists: Array<HomeRouteNewReleasesArtistsArrayObjTypes>;
    availableMarkets : Array<string>;
    externalUrls : {
        spotify : string
    };
    href : string;
    id : string
    images : Array<HomeRouteNewReleasesImagesTypes>;
    name : string;
    releaseDate: string;
    releaseDatePrecision: string;
    totalTracks: number;
    type : string;

  
    constructor(data: HomeRouteNewReleasesSongModelFetchedTypes) {
      this.albumType = data.album_type;
      this.artists = data.artists.map(artist => new HomeRouteArtistsModel(artist));
      this.availableMarkets = data.available_markets;
      this.externalUrls = data.external_urls;
      this.href = data.href;
      this.id = data.id;
      this.images = data.images;
      this.name = data.name;
      this.releaseDate = data.release_date;
      this.releaseDatePrecision = data.release_date_precision;
      this.totalTracks = data.total_tracks;
      this.type = data.type;
    }
  }
  