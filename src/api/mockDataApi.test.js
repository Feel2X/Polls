import { _saveQuestion, _saveQuestionAnswer } from "src/api/mockDataApi"

describe("_saveQuestion", () => {
    const testQuestion = { author: "testAuthor", optionOneText: "testText1", optionTwoText: "testText2" }
    const testQuestionFormatted = {
        author: "testAuthor",
        optionOne: {
            votes: [],
            text: "testText1",
        },
        optionTwo: {
            votes: [],
            text: "testText2",
        }
    }
    const testQuestionIncorrect = { author: "testAuthor", optionOneText: "testText1" }

    test("question is returned and all fields are populated if data is passed correctly", async () => {
        await expect(_saveQuestion(testQuestion)).resolves.toMatchObject(testQuestionFormatted)
    })

    test("error is returned if data is passed incorrectly", async () => {
        await expect(_saveQuestion((testQuestionIncorrect))).rejects.toMatch("Please provide optionOneText, optionTwoText, and author")
    })

})

describe("_saveQuestionAnswer", () => {
    const testAnswerCorrect = { authedUser: "tylermcginnis", qid: "8xf0y6ziyjabvozdd253nd", answer: "optionOne" }
    const testAnswerIncorrect = { authedUser: "tylermcginnis", qid: "8xf0y6ziyjabvozdd253nd" }

    test("true is returned if the data is passed correctly", async () => {
        await expect( _saveQuestionAnswer(testAnswerCorrect)).resolves.toBe(true)
    })

    test("error is returned if the data is passed incorrectly", async () => {
        await expect( _saveQuestionAnswer(testAnswerIncorrect)).rejects.toMatch("Please provide authedUser, qid, and answer")
    })
})