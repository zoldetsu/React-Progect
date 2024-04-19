import classes from "./CardAnime.module.css";

interface Icard {
  status: string;
  title: string;
  img: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function CardAnime({ status, title, img, onClick }: Icard) {
  return (
    <div className={classes.Card} onClick={onClick}>
      <div>
        <div className={classes.Card_block_img}>
          <img className={classes.Card_img} src={img} alt="" />
          <div className={classes.text_img}>смотреть онлайн</div>
        </div>
        <div className={classes.Card_name} style={{ fontSize: "20px" }}>
          {title}
        </div>
        <p>{status}</p>
      </div>
    </div>
  );
}
