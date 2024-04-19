import Button from "./Button/Button"
import { differences } from '../data'
import { useState } from "react"


export default function ButtonsSections() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)
    }
    
    return (
        <>
            <div className='buttons'>
                
                <Button isActive={contentType === 'way'} onClick={() => handleClick("way")}>Подход</Button>
                <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Доступность</Button>
                <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Концентрация</Button>
                
                {/* <Button text={"Click"}/> */}
                
            </div>
                
            {/* { contentType ? <p>{differences[contentType]}</p> : <div>Нажми на кнопку</div>}   */}

            {/* { !contentType ?  <div>Нажми на кнопку</div> : null}
            { contentType ?  <p>{differences[contentType]}</p> : null} */}

            <div className='drop-down-text'>
                { !contentType &&  <p>Нажми на кнопку</p>}
                { contentType &&  <p>{differences[contentType]}</p>}
            </div>
        </>
    )
}