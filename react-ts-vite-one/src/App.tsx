import "./Styles/App.css"
import HeaderUp from "./components/HeaderUp/Header"
import { useState } from 'react'
import PostList from "./components/PostList/PostList"
import PostForm from "./UI/PostForm"
import MySelect from "./UI/Select/MySelect"



function App() {
  const [posts, setposts] = useState(
    [
      {id: 1, title: "dasd", body: "lassfd"},
      {id: 2, title: "dsfsd 2", body: "asd"},
      {id: 3, title: "gdgdf", body: "sdfn"},
    ]
  )
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")
  
  const createPost = (newPost) => {
    setposts([...posts, newPost])
  }
  const [selectedSort, setSelectedSort] = useState('')
  const removePost = (post) => {
    setposts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setposts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <>
      <HeaderUp/>
      <div className='main'>
  
        <PostForm create={createPost}/>
        <div>
          <MySelect value={selectedSort} onChange={sortPosts} defaultValue="Cортировка" 
          options={[{value: "title", name: "По названию"},{value: "body", name: "По описанию"}]}/>
        </div>
        {
          posts.length ? <PostList remove = {removePost} posts={posts}></PostList>
          : <h1 style={{alignItems: 'center'}} >Посты не найдены</h1>
        }
        
      </div>
      
    </>
  )
}

export default App
