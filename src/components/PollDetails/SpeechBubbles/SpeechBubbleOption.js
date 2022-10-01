import { useState } from "react"

// style
import style from "src/style/SpeechBubbleOption.module.css"
import { Typography } from "@mui/material"

const PATH_A = "/imgs/speechbubbleA.png"
const PATH_B = "/imgs/speechbubbleB.png"

const SpeechBubbleOption = ({ onClick, option, text }) => {
    const [hovered, setHovered] = useState(false)
    const imgSrc = option === "A" ? PATH_A : PATH_B
    const imgStyle = hovered ? style.imgHovered : style.img

    return (
        <div
            className={ style.speechBubbleContainer }
            onMouseOver={ () => setHovered(true) }
            onMouseOut={ () => setHovered(false) }
            onClick={ onClick }
        >
            <img src={ imgSrc } className={ imgStyle }/>
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