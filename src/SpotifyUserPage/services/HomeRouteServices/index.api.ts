import {HomeServiceType} from './index'
import moment from 'moment';
import { HomeRouteFetchedResponseTypes, HomeRouteFetchedNewReleasesResponseTypes, HomeRouteGenresMoodsResponseFetchedTypes } from '../../stores/types'

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
        
        const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=${timeStamp}`, options)
        
        const data = await response.json()
        
        return {
            ...data,
            responseStatus: response.ok,
        }
    }

    newReleasesServiceAPI = async(): Promise<HomeRouteFetchedNewReleasesResponseTypes> => {
        
        const options = {
            method:"GET",
            headers: {
                Authorization: `Bearer ${getJwtToken()}`
            }
        }

        const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?country=IN`, options)
        
        const data = await response.json()
        
        return {
            ...data,
            responseStatus: response.ok,
        }
    }

    genresMoodsServiceAPI = async(): Promise<HomeRouteGenresMoodsResponseFetchedTypes> => {
        
        const options = {
            method:"GET",
            headers: {
                Authorization: `Bearer ${getJwtToken()}`
            }
        }

        const response = await fetch(`https://api.spotify.com/v1/browse/categories`, options)
        
        const data = await response.json()
        
        return {
            ...data,
            responseStatus: response.ok,
        }
    }



}