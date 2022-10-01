// redux
import { useDispatch, useSelector } from "react-redux"

// mui
import { Grid, Typography } from "@mui/material"

// custom components
import PollChart from "src/components/PollDetails/PollChart"
import SpeechBubbleOption from "src/components/PollDetails/SpeechBubbles/SpeechBubbleOption"

// style
import style from "src/style/PollDetailsAnswered.module.css"

const PollDetailsAnswered = ({ questionId }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const questionData = dataState.questions[questionId]
    const questionAuthorData = dataState.users[questionData.author]
    const authedUserInfo = dataState.users[authState.authedUser]

    return (
        <div className={ style.container1 }>
            <div className={ style.container2 }>
                <img src={ questionAuthorData.avatarURL } className={ style.avatar } />
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
        </div>
    )
}

export default PollDetailsAnswered