// redux
import { useSelector } from "react-redux"

// navigation
import { Navigate, useLocation } from "react-router-dom"

export const requireAuth = component => {
    return (
        <RequireAuth>
            { component }
        </RequireAuth>
    )
}

const RequireAuth = ({ children }) => {
    let authState = useSelector(state => state.auth)
    let location = useLocation()

    if (!authState.authedUser) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children
}