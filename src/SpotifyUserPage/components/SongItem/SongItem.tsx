import {SongItemContainer, SongItemImg, SongItemName} from './styledComponents'

export const SongItem = (props:any) => {
    const {songItemDetails} = props
    
    const imageUrl = songItemDetails.images[0].url
    const name = songItemDetails.name
    return(<SongItemContainer>
        <SongItemImg src={imageUrl} alt="song_item"/>
        <SongItemName>{name}</SongItemName>
    </SongItemContainer>)
}
