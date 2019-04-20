import {
    RECEIVE_MOCKDRAFTS,
    ADD_MOCK,
    ADD_PICKS_TO_MOCK,
    CHANGE_MOCK_USER_ID,
    CHANGE_MOCK_NAME
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
        case CHANGE_MOCK_USER_ID :
            return {
                ...state,
                [action.mockId] : {
                    ...state[action.mockId],
                    userId: action.userId
                }
            };
        case CHANGE_MOCK_NAME :
            return {
                ...state,
                [action.mockId]: {
                    ...state[action.mockId],
                    mockName: action.newName
                }
            }
        default :
            return state;
    }
}