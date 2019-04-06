export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';

export function receiveTeams(teams) {
    return {
        type: RECEIVE_TEAMS,
        teams
    }
}
