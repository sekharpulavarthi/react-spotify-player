// import { formatDistanceToNow } from "date-fns";
import moment from "moment";
import {
  PlayListSongItemValue,
  PlayListSongItemContainer,
} from "./styledComponents";

export const EditorsPicksPlayListSongItem = (props: any) => {
  const { songItemDetails, countValue, playSong } = props;

  const { addedAt, album, artist, track, id } = songItemDetails;

  const timeStamp2 = moment(addedAt, "YYYYMMDD").fromNow();

  const onClickPlaySong = () => {
    playSong(id);
  };

  return (
    <PlayListSongItemContainer onClick={onClickPlaySong}>
      <PlayListSongItemValue>{countValue}</PlayListSongItemValue>
      <PlayListSongItemValue>{track}</PlayListSongItemValue>
      <PlayListSongItemValue>{album}</PlayListSongItemValue>
      <PlayListSongItemValue>02:55</PlayListSongItemValue>
      <PlayListSongItemValue>{artist}</PlayListSongItemValue>
      <PlayListSongItemValue>{timeStamp2}</PlayListSongItemValue>
    </PlayListSongItemContainer>
  );
};
