import { USER_LOGIN, ERROR_LOGIN } from "./types";

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/user/login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
    const data = await response.json()
    if (response.ok) {
        dispatch({
            type: USER_LOGIN,
            payload: data
        })
    } else {
        dispatch({
            type: ERROR_LOGIN,
            payload: data.message
        })
    }
}