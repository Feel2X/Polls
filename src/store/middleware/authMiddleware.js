// redux
import {
    bindCookies,
    bindNavigate,
    login,
    logout,
    setAuthedUser,
    tryAutoAuthentication
} from "src/store/slices/authSlice"

const authMiddleware = store => {
    const cookieUtil = {
        cookies: null,
        set: null,
        remove: null
    }
    let navigate = null

    return next => {
        const performBindCookies = ({ cookies, setCookie, removeCookie }) => {
            console.log("Binding auth cookies to authMiddleware...")
            cookieUtil.cookies = cookies
            cookieUtil.set = setCookie
            cookieUtil.remove = removeCookie
        }

        const performBindNavigate = nav => {
            console.log("Binding navigation to authMiddleware...")
            navigate = nav
        }

        const performTryAutoAuthentication = from => {
            console.log("Trying auto login")
            const cachedUser = cookieUtil.cookies["authedUser"]
            if (cachedUser) {
                console.log("-> Success, cached user: ", cachedUser)
                return performLogin({ username: cachedUser })
            }
            console.log("Auto login failed, no cached user")
        }

        const performLogin = ({ username, from }) => {
            console.log("Performing login...")
            cookieUtil.set("authedUser", username, { path: "/" })
            next(setAuthedUser(username))
            navigate(from)
        }

        const performLogout = () => {
            console.log("Performing logout...")
            cookieUtil.remove("authedUser", { path: "/" })
            next(setAuthedUser(null))
        }

        return action => {
            switch (action.type) {
                case bindCookies.type:
                    return performBindCookies(action.payload)
                case bindNavigate.type:
                    return performBindNavigate(action.payload)
                case tryAutoAuthentication.type:
                    return performTryAutoAuthentication(action.payload)
                case login.type:
                    return performLogin(action.payload)
                case logout.type:
                    return performLogout()

                default: // bypass authMiddleware
                    next(action)
            }
        }
    }
}

export default authMiddleware