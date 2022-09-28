import { configureStore } from "@reduxjs/toolkit"

// middleware
import thunk from "redux-thunk"
import authMiddleware from "src/store/middleware/authMiddleware"

// slice reducers
import authReducer from "src/store/slices/authSlice"
import dataReducer from "src/store/slices/dataSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer
    },
    middleware: [thunk, authMiddleware]
})