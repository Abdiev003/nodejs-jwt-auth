import { USER_LOGOUT } from "./types";

export const logout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
    })
}