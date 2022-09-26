// navigation
import { useNavigate } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux"
import { setAuthedUser } from "src/store/slices/authSlice"

const Authentication = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(setAuthedUser("username"))
        navigate("/home")
    }

    return (
        <div>
            AuthenticationPage
            <br />
            <button onClick={ handleLogin }>
                Login
            </button>
        </div>
    )
}

export default Authentication