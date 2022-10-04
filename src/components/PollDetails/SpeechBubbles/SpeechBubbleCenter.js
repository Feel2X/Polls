// style
import style from "src/style/SpeechBubbleCenter.module.css"
import {Typography} from "@mui/material";

const SpeechBubbleCenter = ({ text }) => {
    return (
        <div className={ style.speechBubbleContainer }>
            <img src="/imgs/speechbubble-center.png" className={ style.img } alt="speech-bubble-centered" />
            <div className={ style.textContainer }>
                <Typography variant="h6">
                    { text }
                </Typography>
            </div>
        </div>
    )
}

export default SpeechBubbleCenter