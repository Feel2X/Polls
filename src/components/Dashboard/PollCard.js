import { useState } from "react"

// mui
import { Avatar, Box, Card, Divider, Typography } from "@mui/material"

// util
import { getTimeAsString, limitStringLength } from "src/util"

/**
 * TODO:
 *  [-] Add navigation on click to /questions/:question_id
 */
const PollCard = ({ id, answered, name, avatarSrc, timestamp, optionOne, optionTwo }) => {
    const [hovered, setHovered] = useState(false)

    const statusIconSrc = answered ? "icons/check-mark.png" : "icons/question-mark.png"

    return (
        <Card
            onMouseOver={ () => setHovered(true) }
            onMouseOut={ () => setHovered(false) }
            sx={{ display: "flex", justifyContent: "start", alignItems: "center", width: "700px", my: "15px", cursor: "pointer" }}
            elevation={ hovered ? 8 : 3 }
        >
            <Avatar alt="user-avatar" src={ statusIconSrc }  sx={{ width: 56, height: 56, mx: 3}} />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", my: 1, mx: 2, width: "30%" }}>
                <Avatar alt="user-avatar" src={ avatarSrc }  sx={{ width: 38, height: 38, mx: 2, mb: 1, mt: 1 }} />
                <Typography variant="body1" sx={{ mb: 0 }} gutterBottom={false}>
                    { name }
                </Typography>
                <Typography variant="overline" sx={{ mt: 0 }}>
                    { getTimeAsString(timestamp) }
                </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", width: "100%" }}>
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", px: 1 }}>
                    <Typography variant="h6" color="gray" sx={{ mr: "1px" }}>
                        A
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: "2px" }}>
                        : { limitStringLength(optionOne, 50) }
                    </Typography>
                </Box>
                <Divider orientation="horizontal" variant="middle" flexItem sx={{ my: 1 }} />
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", px: 1 }}>
                    <Typography variant="h6" color="gray" sx={{ mr: "1px" }}>
                        B
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: "2px" }}>
                        : { limitStringLength(optionTwo, 50) }
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default PollCard