import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constants";
import { HomeServiceType } from "../../services/HomeRouteServices";
import {HomeRouteFetchedNewReleasesResponseTypes, HomeRouteNewReleasesResponseObjTypes} from '../types'


export class HomeRouteNewReleasesStore {
    responseStatus: boolean; 
    constraint: string;
    responseData: HomeRouteNewReleasesResponseObjTypes;
    serviceApi: HomeServiceType;

    constructor(serviceApi: HomeServiceType) {
        makeAutoObservable(this)
        this.responseStatus = false; 
        this.constraint = constraints.initial;
        this.responseData = {
        albums: {
            href: "",
            items: [],
            limit: 0,
            next: null,
            offset: 0,
            previous: null,
            total: 0,
        },
        responseStatus: false,
        };
        this.serviceApi = serviceApi;
    }

    updateResponseData = (response: HomeRouteFetchedNewReleasesResponseTypes):void => {
        if(response.response_status) {
            this.constraint = constraints.success;
            this.responseStatus = response.response_status;
            this.responseData = 
        }
    }

}