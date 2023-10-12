import {
    HomeRouteNewReleasesSongModelFetchedTypes,
    HomeRouteNewReleasesImagesTypes
  } from "../../types";


  export class HomeRouteNewReleasesSongItemModel {
    href : string;
    id : string
    images : Array<HomeRouteNewReleasesImagesTypes>;
    name : string;
    releaseDate: string;
  
    constructor(data: HomeRouteNewReleasesSongModelFetchedTypes) {
      this.href = data.href;
      this.id = data.id;
      this.images = data.images;
      this.name = data.name;
      this.releaseDate = data.release_date;
    }
  }
  