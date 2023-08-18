import { Redirect, Route } from "react-router-dom";

import { getJwtToken } from "../../utils/StorageUtils";
import React from "react";

export const ProtectedRoute = (props: any) => {
    if(getJwtToken() !== undefined) {
        return <Route {...props}/>
    } 
    return <Redirect to="/login" />
}