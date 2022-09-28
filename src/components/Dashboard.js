import { useEffect } from "react"

const Dashboard = () => {

    useEffect(() => {
        console.log("Rendering dashboard!")
    }, [])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard