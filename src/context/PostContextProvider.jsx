
import { useState } from 'react'
import { PostsContext } from './PostContext'

const PostContextProvider = ({children}) => {
    const [allPosts, setAllPosts] = useState([])
    const [postInput, setPostInput] = useState("")
    const [tagInput, setTagInput] = useState("")
    const [postToShow, setPostToShow] = useState([])
 const fetchPosts = async () => {
    const data = await fetch("https://dummyjson.com/posts/search?q=" + postInput);
    const json = await data.json();
    setPostToShow(json.posts);
    setAllPosts(json.posts);
  }
  function filterPosts() {
    const posts = (allPosts.filter((post) =>
      post.tags.some((e) =>
        e.includes(tagInput)
      )
    ))
    setPostToShow(posts)
  }
  return (
      <PostsContext.Provider value={{ allPosts, setAllPosts, postInput, setPostInput, tagInput, setTagInput, postToShow, setPostToShow, fetchPosts,filterPosts }}>
        {children}
    </PostsContext.Provider>
  )
}

export default PostContextProvider
