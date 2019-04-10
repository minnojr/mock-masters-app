import {
    RECEIVE_MOCKDRAFTS,
    ADD_MOCK,
    ADD_PICKS_TO_MOCK
} from "../actions/mockdrafts";

export default function mockdrafts (state = {}, action ) {
    switch(action.type) {
        case RECEIVE_MOCKDRAFTS :
            return {
                ...state,
                ...action.mockdrafts
            };
        case ADD_MOCK :
            return {
                ...state,
                [action.mockdraft.id]: action.mockdraft
            };
        case ADD_PICKS_TO_MOCK :
            return {
                ...state,
                [action.mockId]: {
                    ...state[action.mockId],
                    picks: action.picks
                }

            };
        default :
            return state;
    }
}