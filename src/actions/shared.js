import { receiveMockdrafts } from "./mockdrafts";
import { receivePicks } from "./picks";
import { receivePlayers } from "./players";
import { receiveTeams} from "./teams";
import { setUser} from "./users";
import {loginSuccess, setAuthedUser} from "./authedUser";
import { setFocusPick } from "./focusPick";
import { setAppLoaded } from "./appLoaded";

import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = "koltjGnqTCa5dFZAoRSmM7nJYM32";

export function handleInitialData () {
    console.log("*** ---> handleInitalData()...");
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore(); // reference to our FS DB

        const s = getState();
        const uid = s.firebase.auth.uid;


        let mockDraftObj = {};
        let mockId = "";

        let focusPick = {};
        dispatch(showLoading());
        firestore.collection('mockdrafts')
            .where('userId', '==', uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    mockId = doc.id;
                    focusPick = doc.data().picks[0];
                    mockDraftObj[doc.id] = doc.data();
                })
            }).then(() => {

            let picksObj = {};
            firestore.collection('picks')
                .where('mockDraftId', '==', mockId)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        picksObj[doc.id] = doc.data();
                    })
                }).then(() => {

                let teamsObj = {};
                firestore.collection('teams')
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            teamsObj[doc.id] = doc.data();
                        })
                    }).then(() => {

                    let playersObj = {};
                    firestore.collection('players')
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                playersObj[doc.id] = doc.data();
                            })
                        }).then(() => {
                            dispatch(setAppLoaded(false));
                            dispatch(receivePlayers(playersObj));
                            dispatch(receivePicks(picksObj));
                            dispatch(receiveMockdrafts(mockDraftObj));
                            dispatch(setFocusPick(focusPick));
                            dispatch(receiveTeams(teamsObj));
                            dispatch(loginSuccess());
                            dispatch(hideLoading());
                            console.log("1 ***********");
                            dispatch(setAppLoaded(true));
                    });
                });
            });
        });
    }
}