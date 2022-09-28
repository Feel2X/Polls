import { useState } from "react"

// redux
import { useDispatch, useSelector } from "react-redux"
import { login } from "src/store/slices/authSlice"

// mui
import { Avatar, Button, Box, Paper, Typography, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import { LockOutlined, Login } from "@mui/icons-material"
import { deepOrange } from "@mui/material/colors"

// navigation
import { useLocation } from "react-router-dom"

// style
import style from "src/style/Authentication.module.css"

const Authentication = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const dataState = useSelector(state => state.data)
    const [selectedUser, setSelectedUser] = useState("")

    let { from } = location.state || { from: { pathname: "/" } }

    const onUserSelectionChange = e => {
        e.preventDefault()
        setSelectedUser(e.target.value)
    }

    const handleLogin = () => {
        dispatch(login({ username: selectedUser, from }))
    }

    return (
        <div>
            <Box className={ style.box }>
                <Paper elevation={3} className={ style.paper }>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} className={ style.avatar }>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                        Authentication
                    </Typography>
                    <br />
                    <FormControl fullWidth className={ style.form }>
                        <InputLabel id="user-selection-label">Select a User</InputLabel>
                        <Select
                            labelId="user-selection-label"
                            id="user-selection"
                            value={ selectedUser }
                            label="Select a User"
                            onChange={ onUserSelectionChange }
                        >
                            {
                                Object.keys(dataState.users).map(userId => (
                                    <MenuItem value={ dataState.users[userId].id } key={ dataState.users[userId].id }>
                                        { dataState.users[userId].name }
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <br />
                        <Button
                            disabled={ selectedUser === "" }
                            onClick={ handleLogin }
                            variant="contained"
                            endIcon={ <Login /> }
                            className={ style.button }
                        >
                            Login
                        </Button>
                    </FormControl>
                </Paper>
            </Box>
        </div>
    )
}

export default Authentication