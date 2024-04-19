import PostItem from "./PostItem"
export default function PostList({remove, posts }) {

    if (!posts.length) {
        return(
            <h1 style={{alignItems: 'center'}} >Посты не найдены</h1>
              
        )
    }

    return (
        <>
            {posts.map((post, index) =>
          
            <PostItem remove={remove} number={index + 1} posts={post} key={post.id}/>
          )}
        </>
    )
}