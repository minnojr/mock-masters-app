import {
    RECEIVE_MOCKDRAFTS
} from "../actions/mockdrafts";

export default function mockdrafts (state = {}, action ) {
    switch(action.type) {
        case RECEIVE_MOCKDRAFTS :
            return {
                ...state,
                ...action.mockdrafts
            };
        default :
            return state;
    }
}