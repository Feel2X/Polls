// navigation
import { useParams } from "react-router-dom"

// redux
import { useSelector } from "react-redux"

// mui
import {Container, LinearProgress} from "@mui/material"

// custom components
import Header from "src/components/Header"
import QuestionNotFoundMessage from "src/components/PollDetails/QuestionNotFoundMessage";
import PollDetailsAnswered from "src/components/PollDetails/PollDetailsAnswered";
import PollDetailsUnanswered from "src/components/PollDetails/PollDetailsUnanswered";

const PollDetailsContainer = () => {
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)
    const { questionId } = useParams()

    const questionData = dataState.questions[questionId]
    const authedUserInfo = dataState.users[authState.authedUser]
    const questionAnswered = authedUserInfo.answers[questionId] ? true : false

    return (
        <div>
            <Header />
            { dataState.submittingAnswer && <LinearProgress sx={{ width: "100%", position: "absolute" }} color="primary" /> }
            <Container
                maxWidth="md"
                sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}
            >
                {
                    questionData === undefined ?
                        <QuestionNotFoundMessage questionId={ questionId } />
                        :
                        questionAnswered ?
                            <PollDetailsAnswered questionId={ questionId } />
                            :
                            <PollDetailsUnanswered questionId={ questionId } />
                }
            </Container>
        </div>
    )
}

export default PollDetailsContainer