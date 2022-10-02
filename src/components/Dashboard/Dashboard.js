import { useState } from "react"
import { useNavigate } from "react-router-dom"

// redux
import { useSelector } from "react-redux"

// mui
import { Container, Divider, Fab, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'

// custom components
import Header from "src/components/Header"
import FilterMenu from "src/components/Dashboard/FilterMenu"
import PollCard from "src/components/Dashboard/PollCard"

// util
import { sortByTimestamp } from "src/util"

const Dashboard = () => {
    const navigate = useNavigate()
    const authState = useSelector(state => state.auth)
    const dataState = useSelector(state => state.data)
    const [displayFilterOption, setDisplayFilterOption] = useState("none")

    const authedUserInfo = dataState.users[authState.authedUser]
    // filter for questions status and sort by timestamp
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
                                key={ q.id }
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
                                    key={ q.id }
                                />
                            )
                        }
                    )
                }
                <Fab
                    onClick={ () => navigate("/add") }
                    color="primary"
                    aria-label="add"
                    sx={{ position: "fixed", bottom: "30px", right: "30px" }}
                >
                    <AddIcon />
                </Fab>
            </Container>
        </div>
    )
}

export default Dashboard