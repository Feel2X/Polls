import { useState } from "react"


// mui
import { TextField } from "@mui/material"

// style
import style from "src/style/SpeechBubbleInput.module.css"

const PATH_A = "/imgs/speechbubbleA.png"
const PATH_B = "/imgs/speechbubbleB.png"

const SpeechBubbleInput = ({ option, text, setText }) => {
    const [showError, setShowError] = useState(false)

    const imgSrc = option === "A" ? PATH_A : PATH_B

    const handleInputChange = e => {
        e.preventDefault()
        const text = e.target.value
        if (text.length > 160) { setShowError(true) }
        else { setShowError(false) }
        setText(text.substring(0, 160))
    }

    return (
        <div
            className={ style.speechBubbleContainer }
        >
            <img src={ imgSrc } className={ style.img } alt="speech-bubble-side" />
            <div className={ style.textContainer }>
                <TextField
                    value={ text }
                    placeholder={ `Type in option ${ option }` }
                    onChange={ handleInputChange }
                    id="outlined-multiline-static"
                    multiline
                    rows={ 3 }
                    label={ `Option ${ option } ${ showError ? "(character limit: 160)" : "" }` }
                    variant="standard"
                    error={ showError }
                    InputProps={{ disableUnderline: true }}
                    sx={{ width: "380px", height: "100%", margin: "15px" }}
                />
            </div>
        </div>
    )
}

export default SpeechBubbleInput