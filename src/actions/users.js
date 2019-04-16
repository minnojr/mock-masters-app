
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CHANGE_USER_MOCK_ID = 'CHANGE_USER_MOCK_ID';
export const SET_USER = 'SET_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function changeUserMockId(userId, draftId) {
    return {
        type: CHANGE_USER_MOCK_ID,
        userId,
        draftId
    }
}
