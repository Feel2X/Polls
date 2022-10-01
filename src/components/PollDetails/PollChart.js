// external components
import { PieChart } from "react-minimal-pie-chart"

const PollChart = ({ votesOptionOne, votesOptionTwo }) => {
    const data = [
        { title: "A", value: votesOptionOne, color: "#FFE0B2" },
        { title: "B", value: votesOptionTwo, color: "#CCFD90" }
    ]

    const defaultLabelStyle = {
        fontSize: "10px",
        fontFamily: "sans-serif"
    }

    return (
        <div style={{ marginTop: "15px" }}>
            <PieChart
                data={ data }
                style={{ height: "220px", filter: "drop-shadow(3px 3px 4px darkgray)" }}
                lineWidth={ 20 }
                paddingAngle={ 18 }
                startAngle={ 100 }
                rounded
                label={ ({ dataEntry }) => dataEntry.value }
                labelStyle={ idx => ({
                    fontSize: "10px",
                    fontFamily: "sans-serif"
                })}
                labelPosition={ 60 }
                animate
            />
        </div>
    )
}

export default PollChart