import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";

import { EditorsPicksPlayListRouteServiceAPI } from "../services/EditorsPicksPlayListRouteServices/index.api";

import { EditorsPicksPlayListStore } from "../stores/EditorsPicksPlayListStore/EditorsPicksPlayListStore";

const editorsPicksPlayListServiceInstance = new EditorsPicksPlayListRouteServiceAPI();

const editorsPicksPlayListStoreInstance = new EditorsPicksPlayListStore(
  editorsPicksPlayListServiceInstance
);

const EditorsPicksPlayListContext = createContext(
  editorsPicksPlayListStoreInstance
);

export const EditorsPicksPlayListHook = ({ children }: ChildProps) => (
  <EditorsPicksPlayListContext.Provider
    value={editorsPicksPlayListStoreInstance}
  >
    {children}
  </EditorsPicksPlayListContext.Provider>
);

export const useEditorsPicksPlayListHook = () =>
  useContext(EditorsPicksPlayListContext);
