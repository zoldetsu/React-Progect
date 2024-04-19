
export default function WayToTuch(props) {
    function handleClick() {
        localStorage.setItem('auth-time', new Date())
      }

    return (
        <li onClick={handleClick}>
            <p>
            <strong>{props.title}</strong>
            {props.description}
            </p>
        </li>
    )
}