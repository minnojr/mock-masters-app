import {
    RECEIVE_PICKS,
    EDIT_PICK_PLAYER,
    EDIT_PICK_TEAM
} from "../actions/picks";

export default function picks ( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_PICKS :
            return {
                ...state,
                ...action.picks
            };
        case EDIT_PICK_PLAYER :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    playerId: action.playerId
                }
            };
        case EDIT_PICK_TEAM :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    teamId: action.teamId
                }
            };
        default :
            return state;
    }
}