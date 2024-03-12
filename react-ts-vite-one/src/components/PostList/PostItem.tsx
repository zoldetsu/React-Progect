import MyButton from "../../UI/Button/MyButton";


export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number} {props.posts.title}
                </strong>
                <div>
                    {props.posts.body} 
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.posts)}>Удалить</MyButton>
            </div>
        </div>
    )
}