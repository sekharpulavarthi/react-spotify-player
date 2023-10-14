import PlayListUpperPart from "../PlayListHeaderPart";

export const EditorsPicksPlayListView = (props: any) => {
  const { editorsPicksPlayListViewDetails } = props;

  return (
    <PlayListUpperPart playListDetails={editorsPicksPlayListViewDetails} />
  );
};
