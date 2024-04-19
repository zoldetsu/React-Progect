import classes from "./Button.module.css";

// export default function Button(props) {
//     return <button className="button">{props.text}</button>
// }

export default function Button( {children, isActive, ...props} ) {
    // let classes = "button"

    // if (isActive) classes += ' active' 
    
    // return <button className={isActive ? "button active" : 'button'} onClick={onClick}>{children}</button>
    return (
        <button 
        {...props}
        className={isActive ? `${classes.button} ${classes.active}`: classes.button}
        // onClick={onClick}
        // disabled={disabled}
        >
        {children}
        </button>
    )
}