import { SongItem } from "../SongItem/SongItem";
import { GenresMoodsCategoryItem } from "../GenresMoodsCategoryItem/GenresMoodsCategoryItem";
import {
  SongsContainer,
  SongsCategoryHeading,
  GenresMoodsViewContainer,
} from "./styledComponents";

export const GenresMoodsView = (props: any) => {
  const { genresMoodsData } = props;
  const genresMoodsCategorieslist = genresMoodsData.categories.items;
  return (
    <GenresMoodsViewContainer>
      <SongsCategoryHeading>Genres & Moods</SongsCategoryHeading>
      <SongsContainer>
        {genresMoodsCategorieslist.map((categoryItem: any) => (
          <GenresMoodsCategoryItem
            key={categoryItem.id}
            categoryItemDetails={categoryItem}
          />
        ))}
      </SongsContainer>
    </GenresMoodsViewContainer>
  );
};
