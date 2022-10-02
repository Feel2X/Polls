import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux"
import { saveQuestion } from "src/store/slices/dataSlice"

// mui
import {Button, Container, Grid, LinearProgress, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

// custom components
import Header from "src/components/Header"
import SpeechBubbleCenter from "src/components/PollDetails/SpeechBubbles/SpeechBubbleCenter";
import SpeechBubbleInput from "src/components/PollDetails/SpeechBubbles/SpeechBubbleInput";

// style
import style from "src/style/PollDetailsUnanswered.module.css"

const CreatePoll = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    // form state
    const [optionOneText, setOptionOneText] = useState("")
    const [optionTwoText, setOptionTwoText] = useState("")
    const [inputsValid, setInputsValid] = useState(false)

    const authedUserInfo = dataState.users[authState.authedUser]

    // validate inputs
    useEffect(() => {
        if (optionOneText.length > 0 && optionTwoText.length > 0) {
            setInputsValid(true)
        } else {
            setInputsValid(false)
        }
    }, [optionOneText, optionTwoText])

    return (
        <div>
            <Header />
            { dataState.submittingQuestion && <LinearProgress sx={{ width: "100%", position: "fixed" }} color="primary" /> }
            <Container
                maxWidth="md"
                sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}
            >
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Create new Poll
                </Typography>
                <img src={ authedUserInfo.avatarURL } className={ style.avatar } />
                <SpeechBubbleCenter text="Would you rather" />
                <Grid container spacing={ 4 }>
                    <Grid item xs={ 12 } md={ 6 }>
                        <SpeechBubbleInput
                            option="A"
                            text={ optionOneText }
                            setText={ setOptionOneText }
                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <SpeechBubbleInput
                            option="B"
                            text={ optionTwoText }
                            setText={ setOptionTwoText }
                        />
                    </Grid>
                </Grid>
                <Button
                    onClick={ () => dispatch(saveQuestion({ optionOneText, optionTwoText, author: authedUserInfo.id, navigationCallback: () => navigate("/") })) }
                    disabled={ !inputsValid }
                    color="primary"
                    variant="contained"
                    endIcon={ <SendIcon /> }
                    size="small"
                    sx={{ marginY: "35px" }}
                >
                    Submit
                </Button>
            </Container>
        </div>
    )
}

export default CreatePoll