// custom components
import { StyledTableCell, StyledTableRow, HighlightedTableRow } from "src/components/Leaderboard/tableComponents"

const CustomTableRow = ({ rank, userData, highlighted }) => {
    if (!highlighted) {
        return (
            <StyledTableRow key="test">
                <StyledTableCell>
                    { rank }.
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={ userData.avatarURL } style={{ height: "30px", marginRight: "10px" }} />
                        { userData.name} ({userData.id})
                    </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                    { Object.keys(userData.answers).length }
                </StyledTableCell>
                <StyledTableCell align="center">
                    { Object.keys(userData.questions).length }
                </StyledTableCell>
            </StyledTableRow>
        )
    } else {
        return (
            <HighlightedTableRow key="test">
                <StyledTableCell>
                    { rank }.
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={ userData.avatarURL } style={{ height: "30px", marginRight: "10px" }} />
                        You ({userData.id})
                    </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                    { Object.keys(userData.answers).length }
                </StyledTableCell>
                <StyledTableCell align="center">
                    { Object.keys(userData.questions).length }
                </StyledTableCell>
            </HighlightedTableRow>
        )
    }
}

export default CustomTableRow