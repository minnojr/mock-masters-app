import { ON_EDIT_PICK } from "../actions/toggleMobile";

export default function toggleMobile (state = false , action) {
    switch(action.type) {
        case ON_EDIT_PICK :
            return action.bool;
        default :
            return state;
    }
}