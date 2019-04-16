import {
    RECEIVE_USERS,
    CHANGE_USER_MOCK_ID,
    SET_USER
} from "../actions/users";

export default function users ( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        case CHANGE_USER_MOCK_ID :
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    draftId: action.draftId
                }
            };
        default :
            return state;
    }
}