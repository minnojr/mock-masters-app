import {
    RECEIVE_TEAMS,
} from "../actions/teams";

export default function teams ( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_TEAMS :
            return {
                ...state,
                ...action.teams
            };
        default :
            return state;
    }
}