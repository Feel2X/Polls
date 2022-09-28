import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// api
import { _getQuestions, _getUsers } from "src/api/mockDataApi"

const INITIAL_STATE = {
    users: {},
    questions: {},
    fetching: false
}

export const fetchData = createAsyncThunk(
    "data/fetchData", // action type string
    async (thunkAPI) => { // callback ( = payload creator )
        return await Promise.all([_getUsers(), _getQuestions()])
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
        [fetchData.pending]: state => {
            return { ...state, fetching: true }
        },
        [fetchData.fulfilled]: (state, { payload }) => {
            console.log("FULFILLED")
            return { ...state, users: payload[0], questions: payload[1], fetching: false }
        },
        [fetchData.rejected]: state => {
            console.error("An error occured during data fetching!")
            return { ...state, fetching: false }
        }
    }
})

/*export const {
} = dataSlice.actions*/

export default dataSlice.reducer