import {
  PlayAudioFooterContainer,
  ImgEl,
  TxtContainerEl,
  PlayListCategoryTextEl,
} from "./styledComponents";

export const PlayListAudioFooter = (props: any) => {
  const { resultObj } = props;
  console.log(resultObj, "resultObj");
  return (
    <PlayAudioFooterContainer>
      {/* <ImgEl src={image} alt={name} /> */}
      <TxtContainerEl>
        <PlayListCategoryTextEl>Editor's Picks</PlayListCategoryTextEl>
        {/* <HeadingEl>{name}</HeadingEl> */}
      </TxtContainerEl>
      <audio
        controls
        src="https://p.scdn.co/mp3-preview/687f110c85489c90cf4cd133b4d53335f8371b8f?cid=512a88c2265943959e50a1dfea9cd7e9.mp3"
      >
        <a href="https://p.scdn.co/mp3-preview/687f110c85489c90cf4cd133b4d53335f8371b8f?cid=512a88c2265943959e50a1dfea9cd7e9.mp3">
          Download audio
        </a>
      </audio>
    </PlayAudioFooterContainer>
  );
};
