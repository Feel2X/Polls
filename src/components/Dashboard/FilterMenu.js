// mui
import { Avatar, ToggleButton, ToggleButtonGroup } from "@mui/material"
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff"

const FilterMenu = ({ filterOption, setFilterOption }) => {
    const onChange = (e, newFilter) => {
        setFilterOption(newFilter)
    }

    return (
        <ToggleButtonGroup
            value={ filterOption }
            onChange={ onChange }
            aria-label="device"
            size="small"
            exclusive
            sx={{ my: 2 }}
        >
            <ToggleButton value="unanswered" aria-label="unanswered">
                <Avatar alt="user-avatar" src={ "icons/question-mark.png" } sx={{ width: 30, height: 30, mx: "4px" }} />
            </ToggleButton>
            <ToggleButton value="none" aria-label="none">
                <FilterAltOffIcon />
            </ToggleButton>
            <ToggleButton value="answered" aria-label="answered">
                <Avatar alt="user-avatar" src={ "icons/check-mark.png" } sx={{ width: 30, height: 30, mx: "4px" }} />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default FilterMenu