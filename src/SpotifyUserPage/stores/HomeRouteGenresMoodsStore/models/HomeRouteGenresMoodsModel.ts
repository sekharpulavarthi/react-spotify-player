import {HomeRouteGenresMoodsSongModelFetchedTypes, HomeRouteGenresMoodsResponseFetchedTypes} from '../../types'
import {HomeRouteGenresMoodsSongItemModel} from './HomeRouteGenresMoodsSongItemModel'

export class HomeRouteGenresMoodsModel {
    categories: {
        href: string,
        items: Array<HomeRouteGenresMoodsSongModelFetchedTypes>,
        total : number 
    };
    responseStatus: boolean

    constructor(data: HomeRouteGenresMoodsResponseFetchedTypes) {
        this.categories = {
            href: data.categories.href,
            items: data.categories.items.map(item => new HomeRouteGenresMoodsSongItemModel(item)),
            total: data.categories.total
        };
        this.responseStatus = data.responseStatus
    }
}