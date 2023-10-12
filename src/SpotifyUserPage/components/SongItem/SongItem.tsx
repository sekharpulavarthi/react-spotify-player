import {
  SongItemContainer,
  SongItemImg,
  SongItemName,
  SongItemLink,
} from "./styledComponents";

export const SongItem = (props: any) => {
  const { songItemDetails } = props;

  const imageUrl = songItemDetails.images[0].url;
  const name = songItemDetails.name;
  const id = songItemDetails.id;

  return (
    <SongItemLink to={`playlists/${id}`}>
      <SongItemContainer>
        <SongItemImg src={imageUrl} alt="song_item" />
        <SongItemName>{name}</SongItemName>
      </SongItemContainer>
    </SongItemLink>
  );
};
