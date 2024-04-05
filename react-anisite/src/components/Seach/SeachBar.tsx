import MyInput from "../../UI/Input/MyInput";
import classes from "./SeachBar.module.css"
import {useState } from "react";
import { AnimeTitle } from '../../poster'

export default function SeachBar({ setResults } ) {
    const [input, setInput] = useState("")
   
    console.log(input)

    const ResultsInput = (value: string) => {
        const results = AnimeTitle.filter((anime) => {
            return (
                value &&
                anime &&
                anime.title &&
                anime.title.toLocaleLowerCase().includes(value)

            )})
        setResults(results)
        
    }
    const handleChange = ((value: string) => {
        setInput(value)
        ResultsInput(value)

   
    })

    return (
        <div >
            <div className={classes.Seach_inner}>
                <h1>Поиск</h1>
                <MyInput typ="text" value = {input} setInput = {(e) => handleChange(e.target.value)}/>
                {/* <Link to='/anime' className={classes.Seach_button}>Поиск</Link> */}
                    
            </div>
        </div>
    )
}