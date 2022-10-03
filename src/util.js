export const limitStringLength = (string, length) => {
    if (string.length > length) {
        return string.slice(0, length) + "..."
    }
    return string
}

export const getTimeAsString = timestamp => {
    const date = new Date(timestamp)
    const hh = padTo2Digits(date.getHours())
    const mm = padTo2Digits(date.getMinutes())
    const y = padTo2Digits(date.getFullYear())
    const m = padTo2Digits(date.getMonth())
    const d = padTo2Digits(date.getDate())
    return `${ hh }:${ mm } | ${ m }/${ d }/${ y }`
}

const padTo2Digits = num => {
    return num.toString().padStart(2, "0")
}

export const sortByTimestamp = questionsArray => {
    return questionsArray.sort((a, b) => { return b.timestamp - a.timestamp })
}

export const sortUsers = usersArray => {
    return usersArray.sort((a, b) => {
        return Object.keys(b.answers).length + b.questions.length -
            (Object.keys(a.answers).length + a.questions.length)
    })
}