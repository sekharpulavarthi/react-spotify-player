import { SongItem } from "../SongItem/SongItem"
import {SongsContainer, SongsCategoryHeading} from './styledComponents'

export const EditorsPicksList = (props: any) => {
    const {editorsPickslist} = props
  
     return(<SongsContainer>
        {editorsPickslist.map((songItem:any) => (
          <SongItem songItemDetails={songItem} />
        ))}
     </SongsContainer>)
}

