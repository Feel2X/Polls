// custom components
import Authentication from "src/components/Authentication"

// routing
import { Navigate, Route, Routes } from "react-router-dom"

const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={ <Authentication /> } />
            <Route path="*" element={ <Navigate to="/login" /> } />
        </Routes>
    )
}

export default PublicRoutes