import {
    RECEIVE_PLAYERS,
    ADD_PLAYER
} from "../actions/players";

export default function players ( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_PLAYERS :
            return {
                ...state,
                ...action.players
            };
        case ADD_PLAYER :
            return {
                ...state,
                // [action.player.id]: action.player
            };
        default :
            return state;
    }
}