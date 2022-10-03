// redux
import { useDispatch, useSelector } from "react-redux"
import { logout } from "src/store/slices/authSlice"

// mui
import { AppBar, Avatar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import PollIcon from '@mui/icons-material/Poll'
import LogoutIcon from '@mui/icons-material/Logout'

// navigation
import { useNavigate } from "react-router-dom"

const Header = () => {
    // navigation
    const navigate = useNavigate()

    // redux
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const authedUserInfo = dataState.users[authState.authedUser]

    const handleLogout = () => dispatch(logout())

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    <PollIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Polls
                    </Typography>
                    <Box sx={{ display: "flex", flexGrow: 1 }}>
                        <MenuItem onClick={() => navigate("/")}>
                            <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/leaderboard")}>
                            <Typography textAlign="center">Leaderboard</Typography>
                        </MenuItem>
                    </Box>
                    <Box sx={{ display: "flex", flexGrow: 0, alignItems: "center", textAlign: "center" }} >
                        <Avatar alt="user-avatar" src={ authedUserInfo.avatarURL } sx={{ width: 38, height: 38, mr: 2, alignSelf: "center" }} />
                        <Typography sx={{ mr: 4 }}>{ authedUserInfo.name }</Typography>
                        <Button
                            onClick={ handleLogout }
                            color="error"
                            variant="contained"
                            endIcon={ <LogoutIcon /> }
                            size="small"
                            sx={{ marginY: "10px" }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header