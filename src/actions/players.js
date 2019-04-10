import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const ADD_PLAYER = 'ADD_PLAYER';

export function receivePlayers(players) {
    return {
        type: RECEIVE_PLAYERS,
        players
    }
}

export function addPlayer(player) {
    return {
        type: ADD_PLAYER,
        player
    }
}

export function handleAddPlayer(player) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(showLoading());
        console.log(player);

        const firestore = getFirestore(); // reference to our FS DB
        console.log(firestore.collection('players'));
            firestore.collection('players').add(player).then((p) => {
                console.log("\n\nDispatching player...\n\n");
                dispatch(addPlayer(p));
            })
            .then(() => dispatch(hideLoading()))
            .catch((err) => {
                console.log("Error in Players Action Creators: handleAddPlayer()");
            });

    }
}


export function handleAddAllPlayers(players) {
    console.log("\n\n****");
    console.log("handleAddAllPlayers");

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("\n\n****");
        console.log("Inside");

        const firestore = getFirestore(); // reference to our FS DB
        console.log(firestore.collection('players'));

        let promisesArr = [];

        players.map((player) => {
            let x = firestore.collection('players').add(player);
            promisesArr.push(x);
        });

        Promise.all(promisesArr).then((x) => {
            console.log("\n\n\n ALL PROMISES \n\n\n");
            console.log(x);
            dispatch(receivePlayers(players));
        })

    }
}