import { EditorsPicksPlayListServiceType } from "./index";
import { EditorsPicksPlayListsFetchedResposeTypes } from "../../stores/types";

import { getJwtToken } from "../../../Common/utils/StorageUtils";

export class EditorsPicksPlayListRouteServiceAPI
  implements EditorsPicksPlayListServiceType {
  editorsPicksPlayListServiceAPI = async (
    id: string
  ): Promise<EditorsPicksPlayListsFetchedResposeTypes> => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    };

    const response = await fetch(
      `https://api.spotify.com/v1/users/spotify/playlists/${id}`,
      options
    );

    const data = await response.json();

    return {
      ...data,
      responseStatus: response.ok,
    };
  };
}
