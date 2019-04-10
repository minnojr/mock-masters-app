import { getInitialData } from "../utils/api";
import { receiveMockdrafts } from "./mockdrafts";
import { receivePicks } from "./picks";
import { receivePlayers } from "./players";
import { receiveTeams} from "./teams";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { setFocusPick } from "./focusPick";

import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "l8k743rlczshp3dqe1bh";

export function handleInitialData () {
    console.log("*** ---> handleInitalData()...");
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(showLoading());

        const firestore = getFirestore(); // reference to our FS DB

        // const draftId = users[AUTHED_ID].draftId;

        let mockDraftObj = {};
        let mockId = "";

        let focusPick = {};
        firestore.collection('mockdrafts')
            .where('userId', '==', AUTHED_ID)
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

                                    dispatch(receivePlayers(playersObj));
                                    dispatch(setAuthedUser(AUTHED_ID));
                                    dispatch(receivePicks(picksObj));
                                    dispatch(receiveMockdrafts(mockDraftObj));
                                    dispatch(setFocusPick(focusPick));
                                    dispatch(receiveTeams(teamsObj));
                                    dispatch(hideLoading());
                                });
                            });
                    });
            });

        // return getInitialData()
        //     .then(({users, mockdrafts, picks, players, teams}) => {
        //         const draftId = users[AUTHED_ID].draftId;
        //         const md = mockdrafts[draftId];
        //         const focusPick = md.picks[0];
        //
        //         dispatch(receiveUsers(users));
        //         dispatch(setAuthedUser(AUTHED_ID));
        //         // dispatch(receiveTeams(teams));
        //         // dispatch(receivePlayers(players));
        //         // dispatch(receivePicks(picks));
        //         // dispatch(receiveMockdrafts(mockdrafts));
        //         // dispatch(setFocusPick(focusPick));
        //         dispatch(hideLoading());
        //     })
    }
}