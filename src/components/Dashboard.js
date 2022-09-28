import { useEffect } from "react"

// custom components
import Header from "src/components/Header"

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div stlye={{ zIndex: "100", marginTop: "100px", color: "green", backgroundColor: "red", top: "100px", position: "relative" }}>DASHBOARD</div>
        </div>
    )
}

export default Dashboard