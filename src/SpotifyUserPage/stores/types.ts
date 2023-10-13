export interface ProfileObjectTypes {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: string[];
  product: string;
  type: string;
  uri: string;
}

export interface HomeRouteEditorsPicksImagesTypes {
  height: null;
  url: string;
  width: null;
}

export interface HomeRouteSongModelFetchedTypes {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<HomeRouteEditorsPicksImagesTypes>;
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null;
  public: null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface HomeRouteFetchedResponseTypes {
  message: string;
  playlists: {
    href: string;
    items: Array<HomeRouteSongModelFetchedTypes>;
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  };
  responseStatus: boolean;
}

export interface HomeRouteSongModelObjTypes {
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
}

export interface HomeRouteObjResponseTypes {
  message: string;
  playlists: {
    href: string;
    items: Array<HomeRouteSongModelObjTypes>;
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  };
  responseStatus: boolean;
}

export interface HomeRouteNewReleasesImagesTypes {
  height: null;
  url: string;
  width: null;
}

export interface HomeRouteNewReleasesArtistsArrayTypes {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface HomeRouteNewReleasesSongModelFetchedTypes {
  album_type: string;
  artists: Array<HomeRouteNewReleasesArtistsArrayTypes>;
  available_markets: Array<string>;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<HomeRouteNewReleasesImagesTypes>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface HomeRouteFetchedNewReleasesResponseTypes {
  albums: {
    href: string;
    items: Array<HomeRouteNewReleasesSongModelFetchedTypes>;
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  };
  responseStatus: boolean;
}

export interface HomeRouteNewReleasesArtistsArrayObjTypes {
  externalUrls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface HomeRouteNewReleasesSongModelObjTypes {
  href: string;
  id: string;
  images: Array<HomeRouteNewReleasesImagesTypes>;
  name: string;
  releaseDate: string;
}

export interface HomeRouteNewReleasesResponseObjTypes {
  albums: {
    href: string;
    items: Array<HomeRouteNewReleasesSongModelObjTypes>;
    total: number;
  };
  responseStatus: boolean;
}

export interface HomeRouteGenresMoodsImagesTypes {
  height: null;
  url: string;
  width: null;
}

export interface HomeRouteGenresMoodsSongModelFetchedTypes {
  href: string;
  id: string;
  icons: Array<HomeRouteGenresMoodsImagesTypes>;
  name: string;
}

export interface HomeRouteGenresMoodsResponseFetchedTypes {
  categories: {
    href: string;
    items: Array<HomeRouteGenresMoodsSongModelFetchedTypes>;
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  };
  responseStatus: boolean;
}

export interface HomeRouteGenresMoodsResponseObjTypes {
  categories: {
    href: string;
    items: Array<HomeRouteGenresMoodsSongModelFetchedTypes>;
    total: number;
  };
  responseStatus: boolean;
}

export interface EditorsPicksGenresMoodsArtishsFRTypes {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface EditorsPicksPlayListsItemsFetchedResposeTypes {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    uri: string;
    id: string;
    type: string;
  };
  is_local: boolean;
  primary_color: null;
  track: {
    album: {
      album_type: string;
      artists: Array<EditorsPicksGenresMoodsArtishsFRTypes>;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<HomeRouteGenresMoodsImagesTypes>;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: Array<EditorsPicksGenresMoodsArtishsFRTypes>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: false;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
  };
  video_thumbnail: {
    url: null;
  };
}

export interface EditorsPicksPlayListsFetchedResposeTypes {
  collaborative: string;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: Array<HomeRouteGenresMoodsImagesTypes>;
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: Array<EditorsPicksPlayListsItemsFetchedResposeTypes>;
    limit: number;
    next: null;
    offset: number;
    total: number;
    previous: null;
  };
  type: string;
  uri: string;
}

export interface EditorsPicksPlayListsResposeObjTypes {
  images: Array<HomeRouteGenresMoodsImagesTypes>;
  name: string;
  responseStatus: boolean;
}

export interface MatchParamsTypes {
  id: string;
}