import { SongItem } from "../SongItem/SongItem";
import {
  SongsContainer,
  SongsCategoryHeading,
  NewReleasesViewContainer,
} from "./styledComponents";

export const NewReleasesView = (props: any) => {
  const { newReleasesData } = props;
  const newReleaseslist = newReleasesData.albums.items;

  return (
    <NewReleasesViewContainer>
      <SongsCategoryHeading>New Releases</SongsCategoryHeading>
      <SongsContainer>
        {newReleaseslist.map((songItem: any) => (
          <SongItem key={songItem.id} songItemDetails={songItem} />
        ))}
      </SongsContainer>
    </NewReleasesViewContainer>
  );
};
