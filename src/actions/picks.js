import { handleAddPicksToMock } from "./mockdrafts";


export const RECEIVE_PICKS = 'RECEIVE_PICKS';
export const EDIT_PICK_PLAYER = 'EDIT_PICK_PLAYER';
export const EDIT_PICK_TEAM = 'EDIT_PICK_TEAM';
export const SWAP_PICK_TEAMS = 'SWAP_PICK_TEAMS';

export function swapPickTeams(toPickId, teamId) {
    return {
        type: SWAP_PICK_TEAMS,
        toPickId,
        teamId
    }
}

export function handleSwapPickTeams(toPickId, fromPickId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const toPickPromise = firestore.collection('picks')
            .doc(toPickId)
            .get()
            .then((doc) => {
                return doc.data();
            });



        const fromPickPromise = firestore.collection('picks')
            .doc(fromPickId)
            .get()
            .then((doc) => {
                return doc.data();
            });



        toPickPromise.then((data) => {
            firestore.collection('picks')
                .doc(fromPickId)
                .update({
                    teamId: data.teamId
                }).then(() => {
                dispatch(swapPickTeams(fromPickId, data.teamId));

            });
        });


        fromPickPromise.then((data) => {
            firestore.collection('picks')
                .doc(toPickId)
                .update({
                    teamId: data.teamId
                }).then(() => {
                dispatch(swapPickTeams(toPickId, data.teamId));
            })
        })


    }
}


export function receivePicks(picks) {
    return {
        type: RECEIVE_PICKS,
        picks
    }
}

export function handleGenerateMockPicks(mockId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB

        let teams = [
            {id: "AzXx6dYCLSBtqf4PsUqb", name: "Cardinals"},
            {id: "Y3oVUCDObPLOnnwAPDTb", name: "49ers"},
            {id: "KSugcLsGdWUWU8zqdOUr", name: "Jets"},
            {id: "MYlaszZrzAsZIyHNVb2f", name: "Raiders"},
            {id: "uo8jutNtbodXn9V9DyAh", name: "Buccaneers"},
            {id: "psljWNUsL1ioeW094uWj", name: "Giants"},
            {id: "fqOK9Yb5LNHgRkUK5gKi", name: "Jaguars"},
            {id: "GmXQuUg0UWF7UX7Hn1Jd", name: "Lions"},
            {id: "UtqkkuMTdWhaNMgEndeT", name: "Bills"},
            {id: "yY19PMSRxnSqg1dqAfyf", name: "Broncos"},
            {id: "IMAewcyOgCgbOX0xs3B1", name: "Bengals"},
            {id: "5giDVwaL4O52faZREtDo", name: "Packers"},
            {id: "1WSKq9j4Rn9HCx7C7Wqr", name: "Dolphins"},
            {id: "21GRUxn91ZYvZ5zwhXH4", name: "Falcons"},
            {id: "bvRKqNWeFaEqGfe0OFcd", name: "Redskins"},
            {id: "DLM97NHZ6EtJoRj6uTtQ", name: "Panthers"},
            {id: "psljWNUsL1ioeW094uWj", name: "Giants"},
            {id: "3G9YQ804G74AB3RKodLZ", name: "Vikings"},
            {id: "Mvr7E0ZIklgeXHEVfiFv", name: "Titans"},
            {id: "wLY8gYC1BdVrXA6fR4XF", name: "Steelers"},
            {id: "XETulMMOm6sK6jWPHCRG", name: "Seahawks"},
            {id: "zPmr57gySw0jbVdupcKB", name: "Ravens"},
            {id: "ArfhTL0CZj35pU3RgqUl", name: "Texans"},
            {id: "MYlaszZrzAsZIyHNVb2f", name: "Raiders"},
            {id: "pCpnBRszaFV5MliZThuD", name: "Eagles"},
            {id: "iIOeSj9VEMovIklXeT6z", name: "Colts"},
            {id: "MYlaszZrzAsZIyHNVb2f", name: "Raiders"},
            {id: "b3XYEDURdXBWw33Zg0S9", name: "Chargers"},
            {id: "N84BvSRLbIPfYTVpeIDv", name: "Chiefs"},
            {id: "5giDVwaL4O52faZREtDo", name: "Packers"},
            {id: "sUMXoPKzTvws8ssKImgP", name: "Rams"},
            {id: "Pq89A6YvIbcaeLPaIhDK", name: "Pats"},
        ];

        let promisesArr = [];
        let count = 0;
        teams.map((team) => {
            count++;
            let pickObj = {
                "pickNum": count.toString(),
                "teamId": team.id,
                "playerId": "VWOHUogWGWpun5xWWnaR",
                "original_team": team.id,
                "mockDraftId": mockId,
                "pickScore": 0
            };

            let x = firestore.collection('picks').add(pickObj);
            promisesArr.push(x);
        });

        Promise.all(promisesArr)
            .then((picks) => {
            console.log("\n\n\n ALL PROMISES \n\n\n");
            dispatch(handleAddPicksToMock(mockId));
        })
    };
}

export function editPickPlayer(id, playerId) {
    return {
        type: EDIT_PICK_PLAYER,
        id,
        playerId
    }
}

export function handleEditPickPlayer(id, playerId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('picks')
            .doc(id)
            .update({
                playerId
            }).then(() => {
                console.log("Player successfully updated");
                dispatch(editPickPlayer(id, playerId));
        });
    }
}

export function editPickTeam(id, teamId) {
    return {
        type: EDIT_PICK_TEAM,
        id,
        teamId
    }
}

export function handleEditPickTeam(id, teamId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('picks')
            .doc(id)
            .update({
                teamId
            }).then(() => {
            console.log("Team successfully updated");
            dispatch(editPickTeam(id, teamId));
        });
    }
}

export function handleGradePick(id, index) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        let masterPick = {};
        firestore.collection('picks')
            .doc(id)
            .get()
            .then((pick) => {
                masterPick =  pick;
            })
            .then(() => {

                let masterPickPlayerId = masterPick._document.proto.fields.playerId.stringValue;

                firestore.collection('mockdrafts')
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => { // MOCK DRAFTS LOOP BEGINS
                            let mockId = doc.id;

                            let picks = [];
                            firestore.collection('picks')
                                .where('mockDraftId', '==', mockId)
                                .get()
                                .then((querySnapshot) => { // PICKS LOOP BEGINS
                                    querySnapshot.forEach((doc) => {
                                        picks.push({
                                            id: doc.id,
                                            pickNum: doc.data().pickNum,
                                            playerId: doc.data().playerId
                                        });

                                        picks.sort((a, b) => a.pickNum - b.pickNum);
                                    })
                                    console.log(picks);
                                })
                                .then(() => {
                                    const thisPick = picks[index-1];

                                    let addToScore = 1;

                                    // console.log("\n\nMaster Mock Pick");
                                    // console.log(masterPickPlayerId);
                                    // console.log("User Mock Pick");
                                    // console.log(masterPick);


                                    // Get the player info for MASTER MOCK:
                                    let userPick = {};
                                    let masterPick = {};
                                    firestore.collection('players')
                                        .doc(masterPickPlayerId)
                                        .get()
                                        .then((pick) => {
                                            masterPick =  pick._document.proto.fields;

                                            // console.log("\n\nMaster Mock Pick");
                                            // console.log(masterPick);

                                            firestore.collection('players')
                                                .doc(thisPick.playerId)
                                                .get()
                                                .then((pick) => {
                                                    userPick =  pick._document.proto.fields;
                                                })
                                                .then(() => {

                                                    console.log("\n\nMaster Mock Pick");
                                                    console.log(masterPick.conference.stringValue);
                                                    console.log("\nUser Mock Pick");
                                                    console.log(userPick.conference.stringValue);
                                                })
                                        });


                                            // let masterPickPlayerId = masterPick._document.proto.fields.playerId.stringValue;

                                    // Start to check for scoring matches here and then add points to addToScore
                                    if(thisPick.playerId === masterPickPlayerId) {
                                        firestore.collection('picks').doc(thisPick.id).update({
                                            pickScore: addToScore
                                        }).then(() => {
                                            // loop over sorted pick array from above and add up pick scores
                                            // set that to mock draft score
                                            firestore.collection('mockdrafts').doc(mockId)
                                                .update({
                                                    draftScore: doc.data().draftScore + addToScore
                                                }).then(() => {
                                                    console.log("Draft score updates")
                                                })

                                        });
                                    }
                                })

                        })
                    })

            });


    }
}