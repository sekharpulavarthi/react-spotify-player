import {
  HeadingEl,
  PlayListHeaderPartContainerEl,
  ImgEl,
  PlayListCategoryTextEl,
  TxtContainerEl,
} from "./styledComponents";

export const PlayListHeaderPart = (props: any) => {
  const { playListDetails } = props;
  console.log(playListDetails);

  const { image, name } = playListDetails;

  return (
    <PlayListHeaderPartContainerEl>
      <ImgEl src={image} alt={name} />
      <TxtContainerEl>
        <PlayListCategoryTextEl>Editor's Picks</PlayListCategoryTextEl>
        <HeadingEl>{name}</HeadingEl>
      </TxtContainerEl>
    </PlayListHeaderPartContainerEl>
  );
};
