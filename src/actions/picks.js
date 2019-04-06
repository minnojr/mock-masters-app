export const RECEIVE_PICKS = 'RECEIVE_PICKS';
export const EDIT_PICK_PLAYER = 'EDIT_PICK_PLAYER';
export const EDIT_PICK_TEAM = 'EDIT_PICK_TEAM';

export function receivePicks(picks) {
    return {
        type: RECEIVE_PICKS,
        picks
    }
}

export function editPickPlayer(id, playerId) {
    return {
        type: EDIT_PICK_PLAYER,
        id,
        playerId
    }
}

export function editPickTeam(id, teamId) {
    return {
        type: EDIT_PICK_TEAM,
        id,
        teamId
    }
}