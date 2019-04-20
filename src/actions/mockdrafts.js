import {changeUserMockId} from "./users";
import {setAppLoaded} from "./appLoaded";

export const RECEIVE_MOCKDRAFTS = 'RECEIVE_MOCKDRAFTS';
export const ADD_MOCK = 'ADD_MOCK';
export const ADD_PICKS_TO_MOCK = 'ADD_PICKS_TO_MOCK';
export const CHANGE_MOCK_USER_ID = 'CHANGE_MOCK_USER_ID';
export const CHANGE_MOCK_NAME = 'CHANGE_MOCK_NAME';


function changeMockName(newName, mockId) {
    return {
        type: CHANGE_MOCK_NAME,
        mockId,
        newName
    }
}

export function handleChangeMockName(newName, mockId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB

        firestore.collection('mockdrafts').doc(mockId).update({
            mockName: newName
        }).then(() => {
            console.log("Name updated");
            dispatch(changeMockName(newName, mockId))
        });
    }
}

export function receiveMockdrafts(mockdrafts) {
    return {
        type: RECEIVE_MOCKDRAFTS,
        mockdrafts
    }
}

export function addPicksToMock(mockId, picks) {
    return {
        ADD_PICKS_TO_MOCK,
        mockId,
        picks
    }
}

export function handleAddPicksToMock(mockDraftId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB

        // Loops over all these picks instances. This is how you loop over them.
        let picks = [];
        firestore.collection('picks')
            .where('mockDraftId', '==', mockDraftId)
            .get()
            .then((querySnapshot) => {
                dispatch(setAppLoaded(false));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    picks.push({
                        id: doc.id,
                        pickNum: doc.data().pickNum
                    });

                    picks.sort((a, b) => a.pickNum - b.pickNum);
                });
            }).then(() => {
                let pickIds = picks.map((pick) => pick.id);
                console.log(picks);
                console.log(pickIds);

                firestore.collection('mockdrafts').doc(mockDraftId).update({
                    picks: pickIds
                }).then(() => {
                    console.log("Document successfully written!");
                    // dispatch(addPicksToMock(mockDraftId, pickIds));
                });
                dispatch(setAppLoaded(true));
            })

    }
}

export function addMock(mockdraft) {
    return {
        type: ADD_MOCK,
        mockdraft
    }
}

export function handleAddMock() {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB

        let newMockDraft = {
            userId: "",
            picks: [],
            draftScore: 0,
            mastermock: false,
            mockName: "NFL MOCK DRAFT 2019"
        };

        firestore.collection('mockdrafts').add(newMockDraft)
            .then(() => dispatch(addMock(newMockDraft)));
    }
}

export function changeMockUserId(mockId, userId) {
    return {
        type: CHANGE_MOCK_USER_ID,
        mockId,
        userId
    }
}

export function handleChangeMockUserId(mockId, userId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB

        dispatch(setAppLoaded(false));

        firestore.collection('mockdrafts').doc(mockId).update({
            userId
        }).then(() => {
            console.log("Mock Draft User ID successfully updated!");
            dispatch(changeMockUserId(mockId, userId));

            firestore.collection('users').doc(userId).update({
                draftId: mockId
            }).then(() => {
                console.log("User's MD ID successfully updated!");
                dispatch(changeUserMockId(userId, mockId));
                dispatch(setAppLoaded(true));
            })

        }).catch(() => {
            dispatch(setAppLoaded(true));
        })
    }
}