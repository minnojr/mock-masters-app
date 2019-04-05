import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

import users from './users'
import mockdrafts from './mockdrafts'
import picks from './picks'
import players from './players'
import teams from './teams'
import authedUser from './authedUser'
import focusPick from './focusPick'


export default combineReducers({
    users,
    authedUser,
    focusPick,
    mockdrafts,
    picks,
    players,
    teams,
    loadingBar: loadingBarReducer,
});
