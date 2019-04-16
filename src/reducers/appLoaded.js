import { SET_APP_LOADED } from "../actions/appLoaded";

export default function appLoaded (state = false , action) {
    switch(action.type) {
        case SET_APP_LOADED :
            return action.isLoaded;
        default :
            return state;
    }
}