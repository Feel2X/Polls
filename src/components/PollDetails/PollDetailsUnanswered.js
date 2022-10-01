// redux
import { useSelector } from "react-redux"

// mui
import { Grid, Typography } from "@mui/material"

// custom components
import SpeechBubbleCenter from "src/components/PollDetails/SpeechBubbles/SpeechBubbleCenter"
import SpeechBubbleOption from "src/components/PollDetails/SpeechBubbles/SpeechBubbleOption"

// style
import style from "src/style/PollDetailsUnanswered.module.css"

/**
 * TODO:
 *  [-] Limit character amount in poll creation
 */
const PollDetailsUnanswered = ({ questionId }) => {
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)

    const questionData = dataState.questions[questionId]
    const questionAuthorData = dataState.users[questionData.author]
    const authedUserInfo = dataState.users[authState.authedUser]

    return (
        <div className={ style.container1 }>
            <Typography variant="h5" sx={{ mt: 7 }}>
                Poll by { questionAuthorData.name }
            </Typography>
            <img src={ questionAuthorData.avatarURL } className={ style.avatar } />
            <SpeechBubbleCenter text="Would you rather" />
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption option="A" text={ questionData.optionOne.text } />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <SpeechBubbleOption option="B" text={ questionData.optionTwo.text } />
                </Grid>
            </Grid>
        </div>
    )
}

export default PollDetailsUnanswered