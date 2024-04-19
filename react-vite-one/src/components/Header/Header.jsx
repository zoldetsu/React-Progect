import { useEffect, useState } from 'react'
import "./Header.css"
export default function Header() {

    const Name = 'Devicorn'
    const [now, setNow] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => setNow(new Date()), 1000)
  
      return () => {
        clearInterval(interval)
        console.log('cleaning...')
      }
    }, [])

    return (
        <header>
            <h1>{Name}</h1>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}


