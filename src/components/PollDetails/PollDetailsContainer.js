// navigation
import { useParams } from "react-router-dom"

// redux
import { useSelector } from "react-redux"

// mui
import { Container } from "@mui/material"

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

    console.log(questionData)

    return (
        <div>
            <Header />
            <Container
                maxWidth="md"
                sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}
            >
                {
                    questionData === undefined ?
                        <QuestionNotFoundMessage questionId={ questionId } />
                        :
                        questionAnswered ?
                            <PollDetailsAnswered />
                            :
                            <PollDetailsUnanswered questionId={ questionId } />
                }
            </Container>
        </div>
    )
}

export default PollDetailsContainer