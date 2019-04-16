import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from "../actions/authedUser";

const initState = {
    authError: null
};

export default function authedUser (state = initState, action) {
    switch(action.type) {
        case LOGIN_ERROR :
            console.log('login error');
            return {
                ...state,
                authError: action.err.message
            };
        case LOGIN_SUCCESS :
            console.log('login success');
            return {
                ...state,
                authedError: null
            };
        case SIGNOUT_SUCCESS :
            console.log('Signout success');
            return {
                ...state,
                authedError: null
            };
        case SIGNUP_SUCCESS :
            return {
                ...state,
                authError: null
            };
        case SIGNUP_ERROR :
            return {
                ...state,
                authError: action.err.message
            };
        default :
            return state;
    }
}