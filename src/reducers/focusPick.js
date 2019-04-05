import { SET_FOCUS_PICK } from "../actions/focusPick";

export default function focusPick (state = null, action ) {
    switch (action.type) {
        case SET_FOCUS_PICK :
            return action.id;
        default :
            return state;
    }
}