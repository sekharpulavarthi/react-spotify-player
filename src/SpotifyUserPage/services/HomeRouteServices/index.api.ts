import {HomeServiceType} from './index'
import moment from 'moment';
import { HomeRouteFetchedResponseTypes } from '../../stores/types'

import { getJwtToken } from '../../../Common/utils/StorageUtils'

export class HomeRouteServiceAPI implements HomeServiceType {


    editorsPicksServiceAPI = async(): Promise<HomeRouteFetchedResponseTypes> => {
        
        const options = {
            method:"GET",
            headers: {
                Authorization: `Bearer ${getJwtToken()}`
            }
        }

        const timeStamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
        // console.log(timeStamp)
        // const countryResponse = await fetch('https://api.spotify.com/v1/me', options)

        // const data1 = await countryResponse.json()
        // console.log(data1)

        const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=${timeStamp}`, options)
        
        const data = await response.json()
        
        return {
            ...data,
            responseStatus: response.ok,
        }
    }



}