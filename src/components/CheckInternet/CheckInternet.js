import React from 'react'
import { Detector } from "react-detect-offline";
import { useDispatch } from 'react-redux'
import { IS_ONLINE } from '../../Constants/Constants';

export const CheckInternet = () => {
    const dispatch = useDispatch();
    const isOffline = val => {
        dispatch({ type: IS_ONLINE, payload: val })
    }
    return <Detector
        render={({ online }) => (
            <div>
                {online ? isOffline(false) : isOffline(true)}
            </div>
        )}
    />
}