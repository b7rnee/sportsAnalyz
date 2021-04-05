import { ACTIONS } from "./actions"

export function mainReducer(state, action) {
    switch (action.type) {
        case ACTIONS.BLOCK:
            return { loading: true }
        case ACTIONS.UNBLOCK:
            return { loading: false }
        default:
            return state
    }

}