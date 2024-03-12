import PostItem from "./PostItem";

export default function PostList({ remove, posts }) {
  return (
    <>
      {posts.map((post, index) => 
        {
          if (post && post.id) {
            return <PostItem remove={remove} number={index + 1} posts={post} key={post.id} />;
          } else {
            return null; // Или другая обработка, если свойство 'id' отсутствует
          }
        }
      )}
    </>
  );
}