// mui
import { Alert, Button, Container } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"

// custom components
import Header from "src/components/Header"

// util
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                <img src="/imgs/magnifying-glass.png" style={{ marginTop: "70px", height: "170px" }} alt="magnifying-glass" />
                <Alert severity="error" sx={{ mt: 4 }}>
                    404 - Not Found
                </Alert>
                <Button
                    onClick={ () => navigate("/") }
                    variant="contained"
                    endIcon={ <HomeIcon /> }
                    sx={{ mt: 3 }}
                >
                    Home
                </Button>
            </Container>
        </>
    )
}

export default Page404