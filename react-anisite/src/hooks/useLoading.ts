import { useState } from "react"

export const useLoading = () => {
    
    const [loading, setLoading] = useState(false)

    setTimeout( () => setLoading(true), 500)


    return [loading]

}