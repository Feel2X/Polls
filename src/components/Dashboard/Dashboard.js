import { useState } from "react"

// redux
import { useSelector } from "react-redux"

// mui
import { Container, Divider, Typography } from "@mui/material"

// custom components
import Header from "src/components/Header"
import FilterMenu from "src/components/Dashboard/FilterMenu"
import PollCard from "src/components/Dashboard/PollCard"

// util
import { sortByTimestamp } from "src/util"

const Dashboard = () => {
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)
    const [displayFilterOption, setDisplayFilterOption] = useState("none")

    // filter for questions status and sort by timestamp
    const authedUserInfo = dataState.users[authState.authedUser]
    const answeredQuestions = sortByTimestamp(
        Object.values(dataState.questions).filter(question => {
            return authedUserInfo.answers[question.id] ? true : false
        })
    )
    const unansweredQuestions = sortByTimestamp(
        Object.values(dataState.questions).filter(question => {
            return authedUserInfo.answers[question.id] ? false : true
        })
    )

    return (
        <div>
            <Header />
            <Container maxWidth="md" sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Poll History
                </Typography>
                <FilterMenu filterOption={ displayFilterOption } setFilterOption={ setDisplayFilterOption } />
                {
                    displayFilterOption !== "answered" && unansweredQuestions.map(q => {
                        const author = dataState.users[q.author]
                        return (
                            <PollCard
                                id={ q.id }
                                answered={ false }
                                name={ author.name }
                                avatarSrc={ author.avatarURL }
                                timestamp={ q.timestamp }
                                optionOne={ q.optionOne.text }
                                optionTwo={ q.optionTwo.text }
                            />
                        )
                }
                    )
                }
                {
                    displayFilterOption === "none" && unansweredQuestions.length !== 0 && answeredQuestions.length !== 0 &&
                        <Divider orientation="horizontal" variant="middle" flexItem sx={{ my: 1 }} />
                }
                {
                    displayFilterOption !== "unanswered" && answeredQuestions.map(q => {
                            const author = dataState.users[q.author]
                            return (
                                <PollCard
                                    id={ q.id }
                                    answered={ true }
                                    name={ author.name }
                                    avatarSrc={ author.avatarURL }
                                    timestamp={ q.timestamp }
                                    optionOne={ q.optionOne.text }
                                    optionTwo={ q.optionTwo.text }
                                />
                            )
                        }
                    )
                }
            </Container>
        </div>
    )
}

export default Dashboard