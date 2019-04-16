import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

import users from './users'
import mockdrafts from './mockdrafts'
import picks from './picks'
import players from './players'
import teams from './teams'
import authedUser from './authedUser'
import focusPick from './focusPick'
import appLoaded from './appLoaded'
import toggleMobile from './toggleMobile'

const LOG_OUT = 'LOG_OUT';

const appReducer = combineReducers({
    appLoaded,
    users,
    authedUser,
    focusPick,
    mockdrafts,
    picks,
    players,
    teams,
    toggleMobile,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    loadingBar: loadingBarReducer,
});

export const rootReducer = ( state, action ) => {
    if ( action.type === LOG_OUT ) {
        state = undefined;
    }

    return appReducer(state, action)
};

