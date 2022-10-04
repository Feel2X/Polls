import { useState } from "react"

// style
import style from "src/style/SpeechBubbleOption.module.css"
import { Typography } from "@mui/material"

const PATH_A = "/imgs/speechbubbleA.png"
const PATH_B = "/imgs/speechbubbleB.png"

const SpeechBubbleOption = ({ onClick, option, text, userAnswer }) => {
    const [hovered, setHovered] = useState(false)

    const imgSrc = option === "A" ? PATH_A : PATH_B
    const toggledImgStyle = hovered ? style.imgHovered : style.img
    const containerStyle = userAnswer ? style.speechBubbleContainerAnswered : style.speechBubbleContainer
    const checkMarkStyle = option === "A" ? style.checkIconLeft : style.checkIconRight

    return (
        <div
            className={ containerStyle }
            onMouseOver={ () => setHovered(true) }
            onMouseOut={ () => setHovered(false) }
            onClick={ onClick }
        >
            <img src={ imgSrc } className={ userAnswer ? style.img : toggledImgStyle } alt="speech-bubble-side" />
            { userAnswer === option && <img src="/icons/check-mark.png" className={ checkMarkStyle } alt="check-mark" /> }
            <div className={ style.textContainer }>
                <Typography variant="h6" color="gray" sx={{ mr: "1px" }}>
                    { option }
                </Typography>
                <span className={ style.textSpan }>{ text }</span>
            </div>
        </div>
    )
}

export default SpeechBubbleOption