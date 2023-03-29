import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  like: number;
};

export function Post(props: PostPropsType) {
  return (
    <div className={s.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg" />
      {props.message}
      <div>
        <span>{`${props.like} likes`}</span>
      </div>
    </div>
  );
}
