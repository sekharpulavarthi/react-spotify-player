import {
    HomeRouteGenresMoodsSongModelFetchedTypes,
    HomeRouteGenresMoodsImagesTypes
  } from "../../types";


  export class HomeRouteGenresMoodsSongItemModel {
    href : string;
    id : string
    icons : Array<HomeRouteGenresMoodsImagesTypes>;
    name : string;
  
    constructor(data: HomeRouteGenresMoodsSongModelFetchedTypes) {
      this.href = data.href;
      this.id = data.id;
      this.icons = data.icons;
      this.name = data.name;
    }
  }
  