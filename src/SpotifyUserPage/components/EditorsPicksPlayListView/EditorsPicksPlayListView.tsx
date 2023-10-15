import PlayListHeaderPart from "../PlayListHeaderPart";
import EditorsPicksPlayListSongItem from "../EditorsPicksPlayListSongItem";
import {
  EditorsPicksPlayListViewContainer,
  PlayListHeaderPartUlContainer,
  PlayListHeaderPartLi,
} from "./styledComponents";
import PlayListAudioFooter from "../PlayListAudioFooter";

export const EditorsPicksPlayListView = (props: any) => {
  const { editorsPicksPlayListViewDetails, getSongItemData } = props;

  let count = 1;
  let resultObj;
  const { items } = editorsPicksPlayListViewDetails;

  const playSong = (id: string) => {
    resultObj = getSongItemData(id);
  };

  return (
    <EditorsPicksPlayListViewContainer>
      <PlayListHeaderPart playListDetails={editorsPicksPlayListViewDetails} />
      <PlayListHeaderPartUlContainer>
        <PlayListHeaderPartLi>#</PlayListHeaderPartLi>
        <PlayListHeaderPartLi>Track</PlayListHeaderPartLi>
        <PlayListHeaderPartLi>Album</PlayListHeaderPartLi>
        <PlayListHeaderPartLi>Time</PlayListHeaderPartLi>
        <PlayListHeaderPartLi>Artist</PlayListHeaderPartLi>
        <PlayListHeaderPartLi>Added</PlayListHeaderPartLi>
      </PlayListHeaderPartUlContainer>

      {items.map((item: any) => (
        <EditorsPicksPlayListSongItem
          countValue={count++}
          songItemDetails={item}
          playSong={playSong}
        />
      ))}

      <PlayListAudioFooter resultObj={resultObj} />
    </EditorsPicksPlayListViewContainer>
  );
};
