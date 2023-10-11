export interface ProfileObjectTypes {
    country: string,
    display_name: string,
    email: string,
    explicit_content: {
      filter_enabled: boolean,
      filter_locked: boolean
    },
    external_urls: {
      spotify: string
    },
    followers: {
      href: null,
      total: number
    },
    href: string,
    id: string,
    images: string [],
    product: string,
    type: string,
    uri: string
}

export interface HomeRouteEditorsPicksImagesTypes {
    height : null,
    url : string,
    width : null
}

export interface HomeRouteSongModelFetchedTypes {
    collaborative : boolean,
    description : string,
    external_urls : {
        spotify : string
    },
    href : string,
    id : string,
    images : Array<HomeRouteEditorsPicksImagesTypes>,
    name : string,
    owner : {
        display_name : string,
        external_urls : {
        spotify : string
        },
        href : string,
        id : string,
        type : string,
        uri : string
    },
    primary_color : null,
    public : null,
    snapshot_id : string,
    tracks : {
        href : string,
        total : number
    },
    type : string,
    uri : string
}



export interface HomeRouteFetchedResponseTypes {
    message : string,
    playlists : {
        href : string,
        items : Array<HomeRouteSongModelFetchedTypes>,
        limit : number,
        next : null,
        offset : number,
        previous : null,
        total : number
    },
    responseStatus: boolean;
}

export interface HomeRouteSongModelObjTypes {
    collaborative:boolean,
    description:string,
    externalUrls: {
        spotify: string
    },
    href:string,
    id:string,
    images:Array<HomeRouteEditorsPicksImagesTypes>,
    name:string, 
    owner:  {
        displayName: string, 
        externalUrls: {spotify: string},
        href: string, 
        id: string,
        type: string, 
        uri: string
    }
    primaryColor:null,
    public: null,
    snapshotId: string, 
    tracks: {
        href: string, 
        total: number
    },
    type: string,
    uri:string
 }


 export interface HomeRouteObjResponseTypes {
    message : string,
    playlists : {
        href : string,
        items : Array<HomeRouteSongModelObjTypes>,
        limit : number,
        next : null,
        offset : number,
        previous : null,
        total : number
    },
    responseStatus: boolean;
}


export interface HomeRouteNewReleasesImagesTypes {
    height : null,
    url : string,
    width : null
}

export interface HomeRouteNewReleasesArtistsArrayTypes {
    external_urls : string,
    href : string,
    id : string,
    name: string,
    type: string,
    uri: string
}


export interface HomeRouteNewReleasesSongModelFetchedTypes {
    album_type : string,
    artists: Array<HomeRouteNewReleasesArtistsArrayTypes>
    available_markets : Array<string>
    external_urls : {
        spotify : string
    },
    href : string,
    id : string,
    images : Array<HomeRouteNewReleasesImagesTypes>,
    name : string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type : string,
    uri : string
}


export interface HomeRouteFetchedNewReleasesResponseTypes {
    albums : {
        href : string,
        items : Array<HomeRouteNewReleasesSongModelFetchedTypes>,
        limit : number,
        next : null,
        offset : number,
        previous : null,
        total : number
    },
    response_status: boolean;
}


export interface HomeRouteNewReleasesArtistsArrayObjTypes {
    externalUrls : string,
    href : string,
    id : string,
    name: string,
    type: string,
    uri: string
}


export interface HomeRouteNewReleasesSongModelObjTypes {
    albumType : string,
    artists: Array<HomeRouteNewReleasesArtistsArrayObjTypes>
    availableMarkets : Array<string>
    externalUrls : {
        spotify : string
    },
    href : string,
    id : string,
    images : Array<HomeRouteNewReleasesImagesTypes>,
    name : string,
    releaseDate: string,
    releaseDatePrecision: string,
    totalTracks: number,
    type : string
}


export interface HomeRouteNewReleasesResponseObjTypes {
    albums : {
        href : string,
        items : Array<HomeRouteNewReleasesSongModelFetchedTypes>,
        limit : number,
        next : null,
        offset : number,
        previous : null,
        total : number
    },
    responseStatus: boolean;
}