export const ON_EDIT_PICK = 'ON_EDIT_PICK';

export function onEditPick(bool) {
    return {
        type: ON_EDIT_PICK,
        bool
    }
}