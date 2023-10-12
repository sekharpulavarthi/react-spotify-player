import { EditorsPicksPlayListServiceType } from "./index";

import { getJwtToken } from "../../../Common/utils/StorageUtils";

export class EditorsPicksPlayListRouteServiceAPI
  implements EditorsPicksPlayListServiceType {
  editorsPicksPlayListServiceAPI = async (): Promise<
    EditorsPicksPlayListsFetchedResposeTypes
  > => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    };

    const response = await fetch(
      "https://api.spotify.com/v1/users/spotify/playlists/${id}"
    );
  };
}
