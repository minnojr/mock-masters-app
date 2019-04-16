export const SET_APP_LOADED = 'SET_APP_LOADED';

export function setAppLoaded(isLoaded) {
    return {
        type: SET_APP_LOADED,
        isLoaded
    }
}