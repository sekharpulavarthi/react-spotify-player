import { SongItem } from "../SongItem/SongItem";
import {
  SongsContainer,
  SongsCategoryHeading,
  EditorsPicksViewContainer,
} from "./styledComponents";

export const HomeRouteEditorsPicksView = (props: any) => {
  const { editorsPicksData } = props;
  const editorsPickslist = editorsPicksData.playlists.items;
  return (
    <EditorsPicksViewContainer>
      <SongsCategoryHeading>{editorsPicksData.message}</SongsCategoryHeading>
      <SongsContainer>
        {editorsPickslist.map((songItem: any) => (
          <SongItem key={songItem.id} songItemDetails={songItem} />
        ))}
      </SongsContainer>
    </EditorsPicksViewContainer>
  );
};
