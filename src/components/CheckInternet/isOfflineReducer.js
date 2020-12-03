import { IS_ONLINE } from "../../Constants/Constants";
export const isOffline = (state = [], action) => {
    if (action.type === IS_ONLINE) return { isOffline: action.payload }
    return state;
}