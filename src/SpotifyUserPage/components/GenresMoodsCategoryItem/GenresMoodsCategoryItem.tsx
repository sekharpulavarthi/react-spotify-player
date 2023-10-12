import { CategoryItemContainer, CategoryItemImg } from "./styledComponents";

export const GenresMoodsCategoryItem = (props: any) => {
  const { categoryItemDetails } = props;

  const imageUrl = categoryItemDetails.icons[0].url;

  return (
    <CategoryItemContainer>
      <CategoryItemImg src={imageUrl} alt="song_item" />
    </CategoryItemContainer>
  );
};
