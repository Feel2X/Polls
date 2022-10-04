// mui
import { Alert, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'

// navigation
import { useNavigate } from "react-router-dom"

const QuestionNotFoundMessage = ({ questionId }) => {
    const navigate = useNavigate()

    return (
        <>
            <img src="/imgs/magnifying-glass.png" style={{ marginTop: "70px", height: "170px" }} alt="magnifying-glass" />
            <Alert severity="error" sx={{ mt: 4 }}>
                The question with ID "{ questionId }" doesn't exist
            </Alert>
            <Button
                onClick={ () => navigate("/") }
                variant="contained"
                endIcon={ <HomeIcon /> }
                sx={{ mt: 3 }}
            >
                Home
            </Button>
        </>
    )
}

export default QuestionNotFoundMessage