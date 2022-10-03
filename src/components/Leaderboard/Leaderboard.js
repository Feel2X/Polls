// redux
import { useSelector } from "react-redux"

// mui
import { Container, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableBody } from "@mui/material"

// custom components
import Header from "src/components/Header"
import CustomTableRow from "src/components/Leaderboard/CustomTableRow"
import { StyledTableCell } from "src/components/Leaderboard/tableComponents"

// util
import { sortUsers } from "src/util"

const Leaderboard = () => {
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const authedUserInfo = dataState.users[authState.authedUser]
    const sortedUserArray = sortUsers(Object.values(dataState.users))

    return (
        <div>
            <Header />
            <Container maxWidth="md" sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Leaderboard
                </Typography>
                <TableContainer component={ Paper } sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized-table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Rank</StyledTableCell>
                                <StyledTableCell>User</StyledTableCell>
                                <StyledTableCell align="center">Answered</StyledTableCell>
                                <StyledTableCell align="center">Created</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { sortedUserArray.map((userData, idx) => {
                                return (
                                    <CustomTableRow
                                        rank={ idx + 1 }
                                        userData={ userData }
                                        highlighted={ userData.id === authedUserInfo.id }
                                        key={ userData.id }
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default Leaderboard