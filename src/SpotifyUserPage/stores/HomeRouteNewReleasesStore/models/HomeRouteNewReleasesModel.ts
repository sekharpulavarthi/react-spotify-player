import {HomeRouteNewReleasesSongItemModel} from './HomeRouteNewReleasesSongItemModle'
import {HomeRouteNewReleasesSongModelObjTypes, HomeRouteFetchedNewReleasesResponseTypes} from '../../types'

export class HomeRouteNewReleasesModel {
    albums: {
        href: string,
        items: Array<HomeRouteNewReleasesSongModelObjTypes>,
        total: number,
    };
    responseStatus: boolean

    constructor(data: HomeRouteFetchedNewReleasesResponseTypes) {
        this.albums = {
        href: data.albums.href,
        items: data.albums.items.map(item => new HomeRouteNewReleasesSongItemModel(item)),
        total:data.albums.total
        };
        this.responseStatus = data.responseStatus
    }
}