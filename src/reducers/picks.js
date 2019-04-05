import {
    RECEIVE_PICKS,
    EDIT_PICK
} from "../actions/picks";

export default function picks ( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_PICKS :
            return {
                ...state,
                ...action.picks
            };
        case EDIT_PICK :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    playerId: action.playerId
                }
            };
        default :
            return state;
    }
}