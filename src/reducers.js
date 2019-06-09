import {
    SET_ROUTE,
    ROBOHASH_PENDING,
    ROBOHASH_ERROR,
    ROBOHASH_SUCCESS
} from './consts'

const initialStateRoute = {
    route: 'robo'
}

const initialStateRobo = {
    roboInput: 'example',
    isPending: false,
    robot: null,
    error: null
}


export const changeRoute = (state = initialStateRoute, action = {}) => {
    switch (action.type) {
        case SET_ROUTE:
            return Object.assign({}, state, { route: action.payload })
        default:
            return state;
    }
}

export const requestRobot = (state = initialStateRobo, action = {}) => {
    switch (action.type) {
        case ROBOHASH_PENDING:
            return Object.assign({}, state, { robot: null, isPending: true, error: null })
        case ROBOHASH_SUCCESS:
            return Object.assign({}, state, { robot: action.payload, isPending: false, error: null })
        case ROBOHASH_ERROR:
            return Object.assign({}, state, { robot: null, isPending: false, error: action.payload })
        default:
            return state;
    }
}