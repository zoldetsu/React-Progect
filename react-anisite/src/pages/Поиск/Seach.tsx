    // import { Link } from "react-router-dom";
import classes from "./Seach.module.css"
import { useState } from "react";
import SeachBar from "../../components/Seach/SeachBar";
import SeachResultList from "../../components/Seach/SeachResultsList";
import { useLoading } from "../../hooks/useLoading";
import MyLoader from "../../UI/Loader/MyLoader";

export default function Seach() {
    
    
    const [loading] = useLoading()
    const [ results, setResults] = useState([]);

    return (
        <div className={classes.Seach}>
            

            { loading ? 

            <div className={classes.Seach_container}>
                <SeachBar setResults = {setResults}/>
                <SeachResultList results={results}/>
            </div>                 
            :
            <MyLoader/>        
            }

        </div>
    )
    
}