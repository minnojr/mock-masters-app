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
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, mockdrafts, picks, players, teams}) => {
                const draftId = users[AUTHED_ID].draftId;
                const md = mockdrafts[draftId];
                const focusPick = md.picks[0];

                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(receiveTeams(teams));
                dispatch(receivePlayers(players));
                dispatch(receivePicks(picks));
                dispatch(receiveMockdrafts(mockdrafts));
                dispatch(setFocusPick(focusPick));
                dispatch(hideLoading());
            })
    }
}