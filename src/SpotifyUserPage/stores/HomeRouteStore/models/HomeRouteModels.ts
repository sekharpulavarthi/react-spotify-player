import { HomeRouteFetchedResponseTypes, HomeRouteSongModelObjTypes } from "../../types";
import { HomeRouteSongItemModel } from "./HomeRouteSongsItemModel";

export class HomeRouteModels {
    message: string;
    playlists: {
        href: string,
        items: Array<HomeRouteSongModelObjTypes>,
        limit: number,
        next: null,
        offset: number,
        previous: null,
        total: number
    };
    responseStatus: boolean;

    constructor(data: HomeRouteFetchedResponseTypes) {
        this.message = data.message;
        this.responseStatus = data.responseStatus;
        this.playlists = {
            href: data.playlists.href,
            items: data.playlists.items.map(item => new HomeRouteSongItemModel(item)),
            limit: data.playlists.limit,
            next: data.playlists.next,
            offset: data.playlists.offset,
            previous: data.playlists.previous,
            total: data.playlists.total
        }
    }

}