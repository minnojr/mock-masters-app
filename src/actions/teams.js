export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const ADD_ALL_TEAMS = 'ADD_ALL_TEAMS';

export function receiveTeams(teams) {
    return {
        type: RECEIVE_TEAMS,
        teams
    }
}

export function handleAddAllTeams(teams) {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("in");

        // const firestore = getFirestore(); // reference to our FS DB
        // // console.log(firestore.collection('teams'));
        //
        // let promisesArr = [];
        //
        // teams.map((team) => {
        //     let x = firestore.collection('teams').add(team);
        //     promisesArr.push(x);
        // });
        //
        // Promise.all(promisesArr).then((x) => {
        //     console.log("\n\n\n ALL PROMISES \n\n\n");
        //     console.log(x);
        // })

    }
}