import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { TableRow } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        /*backgroundColor: theme.palette.grey[400],*/
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

export const HighlightedTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.success.light,
    },
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.success.light,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))