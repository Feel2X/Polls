// redux
import { useDispatch, useSelector } from "react-redux"
import { submitAnswer } from "src/store/slices/dataSlice"

// mui
import { Grid, Typography } from "@mui/material"

// custom components
import SpeechBubbleCenter from "src/components/PollDetails/SpeechBubbles/SpeechBubbleCenter"
import SpeechBubbleOption from "src/components/PollDetails/SpeechBubbles/SpeechBubbleOption"

// style
import style from "src/style/PollDetailsUnanswered.module.css"

const PollDetailsUnanswered = ({ questionId }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const questionData = dataState.questions[questionId]
    const questionAuthorData = dataState.users[questionData.author]

    return (
        <div className={ style.container1 }>
            <Typography variant="h5" sx={{ mt: 7 }}>
                Poll by { questionAuthorData.name }
            </Typography>
            <img src={ questionAuthorData.avatarURL } className={ style.avatar } alt="avatar-img" />
            <SpeechBubbleCenter text="Would you rather" />
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption
                        onClick={ () => dispatch(submitAnswer({ authedUserId: authState.authedUser, questionId, answer: "optionOne" })) }
                        option="A"
                        text={ questionData.optionOne.text }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption
                        onClick={ () => dispatch(submitAnswer({ authedUserId: authState.authedUser, questionId, answer: "optionTwo" })) }
                        option="B"
                        text={ questionData.optionTwo.text }
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default PollDetailsUnanswered