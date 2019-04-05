export const RECEIVE_MOCKDRAFTS = 'RECEIVE_MOCKDRAFTS';

export function receiveMockdrafts(mockdrafts) {
    return {
        type: RECEIVE_MOCKDRAFTS,
        mockdrafts
    }
}