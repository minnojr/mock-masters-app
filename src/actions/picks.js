export const RECEIVE_PICKS = 'RECEIVE_PICKS';
export const EDIT_PICK = 'EDIT_PICK';

export function receivePicks(picks) {
    return {
        type: RECEIVE_PICKS,
        picks
    }
}

export function editPick(id, playerId) {
    return {
        type: EDIT_PICK,
        id,
        playerId
    }
}