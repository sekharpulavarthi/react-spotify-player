import {HomeRouteNewReleasesArtistsArrayTypes} from '../../types'

export class HomeRouteArtistsModel {
    externalUrls : string;
    href : string;
    id : string;
    name: string;
    type: string;
    uri: string;

    constructor(data: HomeRouteNewReleasesArtistsArrayTypes) {
        this.externalUrls = data.external_urls;
        this.href = data.href;
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.uri = data.uri;
    }
}