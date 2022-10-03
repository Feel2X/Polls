import { limitStringLength, getTimeAsString, padTo2Digits, sortByTimestamp } from "src/util"

describe("limitStringLength", () => {
    test("will limit a string which is too long to the given length", () => {
        const testString = "Lorem ipsum dolor sit amet, consetetur sadipscing "
        const testLength = 20

        const testStringLimited = limitStringLength(testString, testLength)
        expect(testStringLimited.length).toBe(testLength + 3)
    })
})

describe("getTimeAsString", () => {
    test("will convert timestamp to a correctly formatted string", () => {
        const testTimestamp = 1664808673000
        const testTimestampStringCorrect = "16:51 | 09/03/2022"

        expect(getTimeAsString(testTimestamp)).toBe(testTimestampStringCorrect)
    })
})

describe("padTo2Digits", () => {
    test("will pad a number of only one digit with a leading zero and return as string", () => {
        const testNum = 1
        expect(padTo2Digits(testNum)).toBe("01")
    })

    test("will not pad a number of two digits with additional zeros but return original number as string", () => {
        const testNum = 10
        expect(padTo2Digits(testNum)).toBe("10")
    })
})

describe("sortByTimestamp", () => {
    test("will sort an array of objects correctly by their timestamp in descending order", () => {
        const testArray = [{ timestamp: 123 }, { timestamp: 789 }, { timestamp: 456 }]
        const testArraySorted = [{ timestamp: 789 }, { timestamp: 456 }, { timestamp: 123 } ]

        expect(sortByTimestamp(testArray)).toEqual(testArraySorted)
    })
})