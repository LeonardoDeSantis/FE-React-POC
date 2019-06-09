import {
    SET_ROUTE,
    ROBOHASH_PENDING,
    ROBOHASH_ERROR,
    ROBOHASH_SUCCESS
} from './consts'

export const setRoute = (route) => ({
    type: SET_ROUTE,
    payload: route
})

export const requestRobot = (roboInput) => (dispatch) => {
    dispatch({ type: ROBOHASH_PENDING });
    fetch('https://robohash.org/' + roboInput)
        .then(response => response.blob())
        .then(data => dispatch({ type: ROBOHASH_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: ROBOHASH_ERROR, payload: error }))
}