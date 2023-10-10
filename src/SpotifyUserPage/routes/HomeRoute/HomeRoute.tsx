import React from "react"
import { useHomeEditorsPicksHook } from "../../hooks/useEditorsPicksHooks"
import { useEffect } from "react"
import { observer } from "mobx-react"
import { Switch } from "react-router-dom"
import { constraints } from "../../../Common/constants"
import Loading from "../../../Common/components/Loading"
import Failure from "../../../Common/components/Failure"
import EditorsPicksView from "../../components/EditorsPicksView"


export const HomeRoute = observer(():JSX.Element => {
    const homeEditorsPicksHook = useHomeEditorsPicksHook()
    
    const gethomeEditorsPicks = () => {
        const {fetchHomeRouteEditorsData, fetchHomeRouteNewReleasesData} = homeEditorsPicksHook
        fetchHomeRouteEditorsData()
        fetchHomeRouteNewReleasesData()
    }

    useEffect(() => {
        gethomeEditorsPicks()
    },[])

    const renderLoader = () => <Loading/>

    const renderFailureView = () => <Failure/>

    const renderSuccessView = () => {
        const {responseData} = homeEditorsPicksHook
        return <EditorsPicksView editorsPicksData = {responseData}/>
    }

    const renderHomeRouteView = () => {
        const {constraint} = homeEditorsPicksHook;
        
        switch (constraint) {
            case constraints.loading:
                return renderLoader()
            case constraints.failure:
                return renderFailureView();
            case constraints.success:
                return renderSuccessView();
            default: 
                return null;
        }
    }

    return(<div>
        {renderHomeRouteView()}
    </div>)
})