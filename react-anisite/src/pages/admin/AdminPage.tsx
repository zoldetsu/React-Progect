import { useContext, useState } from "react";
import MyInput from "../../UI/Input/MyInput";
import classes from "./AdminPage.module.css";
import ImageInput from "../../UI/ImageInput/ImageInput";
import { AuthContext } from "../../context";

export default function AdminPage() {
  const { posts, setPosts } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    discription: "",
    path: "",
    status: "",
  });
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setPost({ ...post, path: imageUrl });
    }
  };
  const addNewPost = () => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
    setPost({ title: "", discription: "", path: "", status: "" });
  };

  return (
    <div className={classes.adminPage}>
      <div className={classes.pageContainer}>
        <div className={classes.text_header}>Cоздание поста</div>
        <div>
          <div className={classes.text_heading}>Название</div>
          <MyInput
            typ={"text"}
            value={post.title}
            setInput={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <div className={classes.text_heading}>описание</div>
          <MyInput
            typ={"text"}
            value={post.discription}
            setInput={(e) => setPost({ ...post, discription: e.target.value })}
          />
        </div>
        <div>
          <div className={classes.text_heading}>Обложка</div>
          <ImageInput
            accept={"/image*"}
            typ={"file"}
            setInput={handleImageChange}
          />
        </div>

        <div onClick={addNewPost} className={classes.add_button}>
          Добавить
        </div>

        <div>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
