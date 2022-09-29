import { useEffect } from "react"

// redux
import { useDispatch, useSelector } from "react-redux"
import { bindCookies, bindNavigate, tryAutoAuthentication } from "src/store/slices/authSlice"
import { fetchData } from "src/store/slices/dataSlice"

// mui
import { LinearProgress } from "@mui/material"

// external components
import { useCookies } from "react-cookie"

// custom components
import Authentication from "src/components/Authentication"
import Dashboard from "src/components/Dashboard/Dashboard"
import CreatePoll from "src/components/CreatePoll"
import Leaderboard from "src/components/Leaderboard"
import Page404 from "src/components/Page404"
import { requireAuth } from "src/requireAuth"


// routing
import { Route, Routes, useNavigate } from "react-router-dom"

/**
 * TODO:
 *  [-] handle case where data couldn't be fetched successfully
 */
function App() {
    const dispatch = useDispatch()
    const dataState = useSelector(state => state.data)
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(["employee-polls-authentication"])

    // bind and update cookies to authMiddleware
    useEffect(() => {
        dispatch(bindCookies({ cookies, setCookie, removeCookie }))
        dispatch(bindNavigate(navigate))
    }, [])

    // auto login if cookie exists
    useEffect(() => {
        dispatch(tryAutoAuthentication())
    }, [])

    // fetch data from api on page load
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <>
            {
                dataState.fetching ?
                    <LinearProgress />
                    :
                    <Routes>
                        <Route index element={ requireAuth(<Dashboard />) } />
                        <Route exact path="/add" element={ requireAuth(<CreatePoll />) } />
                        <Route exact path="/leaderboard" element={ requireAuth(<Leaderboard />) } />
                        <Route path="/login" element={ <Authentication /> } />
                        <Route path="*" element={ <Page404 /> } />
                    </Routes>
            }
        </>
    )
}

export default App
