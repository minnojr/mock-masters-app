import {
    _getUsers,
    _getMockDrafts,
    _getPicks,
    _getPlayers,
    _getTeams
} from './_DATA.js'

export function getInitialData () {
    console.log("*** ---> getInitialData()...");
    return Promise.all([
        _getUsers(),
        _getMockDrafts(),
        _getPicks(),
        _getPlayers(),
        _getTeams()
    ]).then(([users, mockdrafts, picks, players, teams]) => ({
        users,
        mockdrafts,
        picks,
        players,
        teams
    }))
}
