// redux
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// mui
import { Button, Grid, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

// custom components
import PollChart from "src/components/PollDetails/PollChart"
import SpeechBubbleOption from "src/components/PollDetails/SpeechBubbles/SpeechBubbleOption"

// style
import style from "src/style/PollDetailsAnswered.module.css"
import {sortByTimestamp} from "src/util";

const PollDetailsAnswered = ({ questionId }) => {
    const navigate = useNavigate()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const questionData = dataState.questions[questionId]
    const questionAuthorData = dataState.users[questionData.author]
    const authedUserInfo = dataState.users[authState.authedUser]

    const sortedQuestionsArray = sortByTimestamp(Object.values(dataState.questions))
    const questionIdx = sortedQuestionsArray.map(question => question.id).indexOf(questionId)
    const nextQuestionId = sortedQuestionsArray[questionIdx+1]?.id

    return (
        <div className={ style.container1 }>
            <div className={ style.container2 }>
                <img src={ questionAuthorData.avatarURL } className={ style.avatar } alt="avatar-img" />
                <Typography variant="h5" sx={{ mt: 7 }}>
                    Poll by { questionAuthorData.name }
                </Typography>
            </div>
            <PollChart
                votesOptionOne={ questionData.optionOne.votes.length }
                votesOptionTwo={ questionData.optionTwo.votes.length }
            />
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption
                        onClick={ () => {} }
                        option="A"
                        text={ questionData.optionOne.text }
                        userAnswer={ authedUserInfo.answers[questionId] === "optionOne" ? "A" : "B" }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption
                        onClick={ () => {} }
                        option="B"
                        text={ questionData.optionTwo.text }
                        userAnswer={ authedUserInfo.answers[questionId] === "optionOne" ? "A" : "B" }
                    />
                </Grid>
            </Grid>
            <Button
                onClick={ () => navigate(`/questions/${ nextQuestionId }`) }
                disabled={ !nextQuestionId }
                color="primary"
                variant="contained"
                endIcon={ <ArrowForwardIosIcon /> }
                size="small"
                sx={{ marginY: "35px" }}
            >
                Next Poll
            </Button>
        </div>
    )
}

export default PollDetailsAnswered