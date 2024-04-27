import classes from "./CommentsBlock.module.scss";

interface Comment {
  name: string;
  avatar: string;
  comment: string;
}

export default function CommentBlock({ name, avatar, comment }: Comment) {
  return (
    <div className={classes.container}>
      <div className={classes.info_line}>
        <img className={classes.avatar} src={avatar} alt="" />
        <div>{name}</div>
      </div>
      <div className={classes.comment}>{comment}</div>
      <div className={classes.edit_line}>
        <div className={classes.answer}>ответить</div>
        <div className={classes.edit}>редактировать</div>
      </div>
    </div>
  );
}
