export const RECEIVE_MOCKDRAFTS = 'RECEIVE_MOCKDRAFTS';
export const ADD_MOCK = 'ADD_MOCK';
export const ADD_PICKS_TO_MOCK = 'ADD_PICKS_TO_MOCK';


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
            }).then(function() {
                console.log("Document successfully written!");
                // dispatch(addPicksToMock(mockDraftId, pickIds));
            })
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
            score: 0
        };

        firestore.collection('mockdrafts').add(newMockDraft)
            .then(() => dispatch(addMock(newMockDraft)));
    }
}