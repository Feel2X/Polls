// external components
import { PieChart } from "react-minimal-pie-chart"
import {toPercentage} from "src/util";

const PollChart = ({ votesOptionOne, votesOptionTwo }) => {
    const data = [
        { title: "A", value: votesOptionOne, percentage: votesOptionOne / (votesOptionOne + votesOptionTwo), color: "#FFE0B2" },
        { title: "B", value: votesOptionTwo, percentage: votesOptionTwo / (votesOptionOne + votesOptionTwo), color: "#CCFD90" }
    ]

    return (
        <div style={{ marginTop: "15px" }}>
            <PieChart
                data={ data }
                style={{ height: "220px", filter: "drop-shadow(3px 3px 4px darkgray)" }}
                lineWidth={ 20 }
                paddingAngle={ 18 }
                startAngle={ 100 }
                rounded
                label={ ({ dataEntry }) => `${ dataEntry.value } - ${ toPercentage(dataEntry.percentage) }` }
                labelStyle={ idx => ({
                    fontSize: "7px",
                    fontFamily: "sans-serif"
                })}
                labelPosition={ 74 }
                animate
            />
        </div>
    )
}

export default PollChart