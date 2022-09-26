// redux
import { useSelector, useDispatch } from "react-redux"
import { setAuthedUser } from "./store/slices/authSlice"

function App() {
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div>
            Hello World!
            <br />
            State: { authState.authedUser }
            <button onClick={ () => dispatch(setAuthedUser("User")) }>
                SetUser
            </button>
        </div>
    )
}

export default App
