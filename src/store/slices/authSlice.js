import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    authedUser: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        bindCookies: () => {}, // intercepted by authMiddleware
        bindNavigate: () => {}, // intercepted by authMiddleware
        tryAutoAuthentication: () => {}, // intercepted by authMiddleware
        login: () => {}, // intercepted by authMiddleware
        logout: () => {}, // intercepted by authMiddleware

        setAuthedUser: (state, action) => {
            return { ...state, authedUser: action.payload }
        }
    }
})

export const {
    bindCookies,
    bindNavigate,
    login,
    logout,
    setAuthedUser,
    tryAutoAuthentication,
} = authSlice.actions

export default authSlice.reducer