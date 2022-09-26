import { configureStore } from "@reduxjs/toolkit"

// slice reducers
import authReducer from "src/store/slices/authSlice"

export default configureStore({
    reducer: {
        auth: authReducer
    }
})