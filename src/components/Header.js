// redux
import { useDispatch, useSelector } from "react-redux"
import { logout } from "src/store/slices/authSlice"

// mui
import { AppBar, Avatar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb'
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
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
                        Employee Polls
                    </Typography>
                    <Box sx={{ display: "flex", flexGrow: 1 }}>
                        <MenuItem onClick={() => navigate("/")}>
                            <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/leaderboard")}>
                            <Typography textAlign="center">Leaderboard</Typography>
                        </MenuItem>
                    </Box>
                    <Box sx={{ display: "flex", flexGrow: 0 }}>
                        <Avatar alt="user-avatar" src={ authedUserInfo.avatarURL } sx={{ width: 38, height: 38, mr: 2 }} />
                        <Button
                            onClick={ handleLogout }
                            color="error"
                            variant="contained"
                            endIcon={ <LogoutIcon /> }
                            size="small"
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