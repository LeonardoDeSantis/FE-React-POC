import { SET_ROUTE } from './consts'

const initialState = {
    route: 'routeb'
}

export const changeRoute = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ROUTE:
            return Object.assign({}, state, { route: action.payload })
        default:
            return state;
    }
}