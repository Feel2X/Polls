// redux
import { useSelector } from "react-redux"

// routing
import { BrowserRouter } from "react-router-dom"

// routes
import PrivateRoutes from "src/routes/PrivateRoutes"
import PublicRoutes from "src/routes/PublicRoutes"

/**
 * TODO:
 *  [-] Handle automated login with cookies (remove cookie if logged out)
 */
function App() {
    const authState = useSelector(state => state.auth)

    return (
        <BrowserRouter>
            <div>
                User: { String(authState.authedUser) }
            </div>
            {
                authState.authedUser ?
                    <PrivateRoutes />
                    :
                    <PublicRoutes />
            }
        </BrowserRouter>
    )
}

export default App
