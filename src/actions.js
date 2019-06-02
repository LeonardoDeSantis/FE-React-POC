import { SET_ROUTE } from './consts'

export const setRoute = (route) => ({
    type: SET_ROUTE,
    payload: route
})