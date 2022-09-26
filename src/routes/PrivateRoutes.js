// custom components
import CreatePoll from "src/components/CreatePoll"
import Dashboard from "src/components/Dashboard"

// routing
import { Route, Routes } from "react-router-dom"

const PrivateRoutes = () => {
    return (
        <Routes>
            {/* TODO: rename "/home" to "/" */}
            <Route exact path="/home" element={ <Dashboard /> } />
            <Route exact path="/add" element={ <CreatePoll /> } />
        </Routes>
    )
}

export default PrivateRoutes