import { EditorsPicksPlayListsFetchedResposeTypes } from "../../stores/types";

export interface EditorsPicksPlayListServiceType {
  editorsPicksPlayListServiceAPI: () => Promise<
    EditorsPicksPlayListsFetchedResposeTypes
  >;
}
