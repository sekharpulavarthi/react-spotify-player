import React from "react"
import { useHomeEditorsPicksHook } from "../../hooks/useEditorsPicksHooks"
import { useEffect } from "react"
import { observer } from "mobx-react"


export const HomeRoute = ():JSX.Element => {
    const homeEditorsPicksHook = useHomeEditorsPicksHook()
    
    const gethomeEditorsPicks = () => {
        const {fetchHomeRouteEditorsData} = homeEditorsPicksHook
        fetchHomeRouteEditorsData()
    }

    useEffect(() => {
        gethomeEditorsPicks()
    },[])

    return(<div>
        <h1>qwerty</h1>
    </div>)
}