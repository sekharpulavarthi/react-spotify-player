import {HomeRouteNewReleasesSongItemModel} from './HomeRouteNewReleasesSongItemModle'
import {HomeRouteNewReleasesSongModelObjTypes, HomeRouteFetchedNewReleasesResponseTypes} from '../../types'

export class HomeRouteNewReleasesModel {
    albums: {
        href: string,
        items: Array<HomeRouteNewReleasesSongModelObjTypes>,
        limit: number,
        next: null,
        offset: number,
        previous: null,
        total: number,
    };
    responseStatus: boolean

    constructor(data: HomeRouteFetchedNewReleasesResponseTypes) {
        this.albums = {
        href: data.albums.href,
        items: data.albums.items.map(item => new HomeRouteNewReleasesSongItemModel(item)),
        limit: data.albums.limit,
        next:data.albums.next,
        offset:data.albums.offset,
        previous:data.albums.previous,
        total:data.albums.total
        };
        this.responseStatus = data.response_status
    }
}