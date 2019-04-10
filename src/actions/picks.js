import {addPicksToMock, handleAddPicksToMock} from "./mockdrafts";

export const RECEIVE_PICKS = 'RECEIVE_PICKS';
export const EDIT_PICK_PLAYER = 'EDIT_PICK_PLAYER';
export const EDIT_PICK_TEAM = 'EDIT_PICK_TEAM';

export function receivePicks(picks) {
    return {
        type: RECEIVE_PICKS,
        picks
    }
}

export function handleGenerateMockPicks(mockId) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // reference to our FS DB
        // dispatch(handleAddPicksToMock(mockId));

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


        // Adding stuff to redux store. how to get pick IDs at creation ???

        let promisesArr = [];
        let count = 0;
        teams.map((team) => {
            count++;
            let pickObj = {
                "pickNum": count.toString(),
                "teamId": team.id,
                "playerId": "VWOHUogWGWpun5xWWnaR",
                "mockDraftId": mockId,
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

export function editPickTeam(id, teamId) {
    console.log("PICK CONTENT");
    console.log(id);
    console.log(teamId);
    return {
        type: EDIT_PICK_TEAM,
        id,
        teamId
    }
}