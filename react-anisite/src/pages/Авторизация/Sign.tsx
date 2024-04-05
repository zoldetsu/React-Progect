import { Link } from "react-router-dom"
import MyInput from "../../UI/Input/MyInput"
import classes from "./Sign.module.css"
import MyLoader from "../../UI/Loader/MyLoader"
import { useLoading } from "../../hooks/useLoading"

export default function Sign() {

    const [loading] = useLoading()

    return (
        <div className={classes.sign}>
            { loading ? 
            <div className={classes.sign_container}>
                <h1> Добро пожаловать </h1>
                <MyInput typ="text" />
                <MyInput typ="text" />
                <Link to='/anime' >
                    <div className={classes.sign_text}>войти </div>
                </Link>
            </div>
            :
            <MyLoader/>
        }
        </div>
    )
}