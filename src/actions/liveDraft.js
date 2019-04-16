
export function handleSetDraftStatus(isLive) {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('liveDraft').doc('MPCFUxIjfobfEtWK1rTc').update({
            isLive
        }).then(() => {
            console.log("Draft set to: ", isLive);
        });

    }
}