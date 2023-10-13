import { EditorsPicksPlayListsFetchedResposeTypes } from "../../stores/types";

export interface EditorsPicksPlayListServiceType {
  editorsPicksPlayListServiceAPI: (
    id: string
  ) => Promise<EditorsPicksPlayListsFetchedResposeTypes>;
}
