import { USER_REGISTER, ERROR_REGISTER } from "./types";

export const register = (full_name, email, password) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/user/register', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ full_name: full_name, email: email, password: password })
    })
    const data = await response.json()
    if (response.status === 201) {
        dispatch({
            type: USER_REGISTER,
            payload: data
        })
    } else {
        dispatch({
            type: ERROR_REGISTER,
            payload: data
        })
    }
}