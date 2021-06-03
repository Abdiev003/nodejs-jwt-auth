import { USER_LOGIN, USER_REGISTER, ERROR_LOGIN, ERROR_REGISTER, USER_LOGOUT } from '../actions/types'

const initialState = {
    authen: false,
    message: "",
    redirectToNewPage: false,
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                redirectToNewPage: true,
                message: "You succesfully created profil!"
            }

        case ERROR_REGISTER:
            return {
                ...state,
                redirectToNewPage: false,
                message: "Something got wrong!"
            };

        case USER_LOGIN:
            console.log(action.payload);
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                authen: true,
                redirectToNewPage: true,
                user: { ...action.payload }
            }

        case USER_LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                authen: false,
                redirectToNewPage: false,
                user: {}
            }

        default:
            return state;
    }
}