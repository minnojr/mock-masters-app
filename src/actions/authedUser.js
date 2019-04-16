import { handleInitialData } from "./shared";
import {setAppLoaded} from "./appLoaded";

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// export function setAuthedUser (id) {
//     return {
//         type: SET_AUTHED_USER,
//         id
//     }
// }

// ---------------- New Login Below here -------

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
const LOG_OUT = 'LOG_OUT';




export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

export function loginError(err) {
    return {
        type: LOGIN_ERROR,
        err
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).catch((err) => {
            dispatch(loginError(err));
        })
    }
};

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function signOutSuccess() {
    return {
        type: SIGNOUT_SUCCESS,
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(logOut());
            dispatch(signOutSuccess());
        })
    }
};

export function signUpSuccess() {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export function signUpError(err) {
    return {
        type: SIGNUP_ERROR,
        err
    }
}

// function generateUID() {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// };

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const currUserEmail = firebase.auth().currentUser.email;
        const currUserpass = 'Nashville2019';


        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                admin: true,
                email: newUser.email,
                betaCode: '',
                mockdraftName: 'Mock Draft',
                draftId: 1
            })
        }).then(() => {
            dispatch(setAppLoaded(false));
            firebase.auth().signOut().then(() => {
                dispatch(setAppLoaded(false));
                dispatch(signOutSuccess())
            }).then(() => {
                firebase.auth().signInWithEmailAndPassword(
                    currUserEmail,
                    currUserpass
                ).then((x) => {
                    dispatch(loginSuccess());
                }).then(() => {
                    dispatch(handleInitialData);
                    console.log("6 ********");
                    dispatch(setAppLoaded(true));
                }).catch((err) => {
                    console.log("7 ********");
                    dispatch(setAppLoaded(true));
                    dispatch(loginError(err));
                });
            })
        }).catch((err) => {
            dispatch(signUpError(err))
        })
    }
};