import { useState, useEffect } from "react"

export function useTimeOfDay() {
    const [timeOfDay, setTimeOfDay] = useState("")

    useEffect(() => {
        const getTimeOfDay = () => {
            const hour = new Date().getHours()
            if (hour >= 5 && hour < 12) {
                return "Good morning"
            } else if (hour >= 12 && hour < 17) {
                return "Good afternoon"
            } else if (hour >= 17 && hour < 21) {
                return "Good evening"
            } else {
                return "Good night"
            }
        }

        setTimeOfDay(getTimeOfDay())

        const interval = setInterval(() => {
            setTimeOfDay(getTimeOfDay())
        }, 60000) // every minute

        return () => clearInterval(interval)
    }, [])

    return timeOfDay
}
