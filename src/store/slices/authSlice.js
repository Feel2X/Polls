import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    authedUser: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        setAuthedUser: (state, action) => {
            return { ...state, authedUser: action.payload }
        }
    }
})

export const { setAuthedUser } = authSlice.actions

export default authSlice.reducer